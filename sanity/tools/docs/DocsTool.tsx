import { useMemo } from "react";
import { definePlugin } from "sanity";
import { route, useRouter, useRouterState } from "sanity/router";
import { BookIcon } from "@sanity/icons";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import type { ReactNode } from "react";
import remarkGfm from "remark-gfm";
import { getDocsPages } from "./docs";

type RouterState = {
  doc?: string;
};

const DocsToolView = () => {
  const router = useRouter();
  const routerState = useRouterState() as RouterState;
  const pages = useMemo(() => getDocsPages(), []);
  const activeId = routerState.doc ?? pages[0]?.id;
  const activePage = pages.find((page) => page.id === activeId) ?? pages[0];

  const handleSelect = (id: string) => {
    router.navigate({ doc: id });
  };

  if (!activePage) {
    return <div style={{ padding: 24 }}>Документация не найдена.</div>;
  }

  type AnyProps = {
    children?: ReactNode;
    [key: string]: unknown;
  };

  const markdownComponents = {
    h1: (props: AnyProps) => (
      <h1 style={{ margin: "0 0 16px", fontSize: 24 }} {...props} />
    ),
    h2: (props: AnyProps) => (
      <h2 style={{ margin: "24px 0 8px", fontSize: 20 }} {...props} />
    ),
    h3: (props: AnyProps) => (
      <h3 style={{ margin: "18px 0 6px", fontSize: 16 }} {...props} />
    ),
    p: (props: AnyProps) => (
      <p style={{ margin: "12px 0", lineHeight: 1.6 }} {...props} />
    ),
    ul: (props: AnyProps) => (
      <div style={{ paddingLeft: 18 }}>
        <ul style={{ margin: "8px 0" }} {...props} />
      </div>
    ),
    ol: (props: AnyProps) => (
      <div style={{ paddingLeft: 18 }}>
        <ol style={{ margin: "8px 0" }} {...props} />
      </div>
    ),
    table: (props: AnyProps) => (
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: 12,
          }}
          {...props}
        />
      </div>
    ),
    th: (props: AnyProps) => (
      <th
        style={{
          textAlign: "left",
          borderBottom: "1px solid var(--card-border-color)",
          padding: "8px 6px",
        }}
        {...props}
      />
    ),
    td: (props: AnyProps) => (
      <td
        style={{
          borderBottom: "1px solid var(--card-border-color)",
          padding: "8px 6px",
        }}
        {...props}
      />
    ),
    a: (props: AnyProps) => (
      <a {...props} target="_blank" rel="noreferrer" />
    ),
    code: (props: AnyProps) => (
      <code
        style={{
          background: "var(--card-bg-color)",
          padding: "2px 6px",
          borderRadius: 4,
        }}
        {...props}
      />
    ),
  } satisfies Components;

  return (
    <div style={{ display: "flex", height: "100%", minHeight: "100%" }}>
      <div
        style={{
          width: 280,
          borderRight: "1px solid var(--card-border-color)",
          padding: 16,
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "grid", gap: 8 }}>
          {pages.map((page) => {
            const isActive = page.id === activePage.id;
            return (
              <button
                key={page.id}
                type="button"
                onClick={() => handleSelect(page.id)}
                style={{
                  textAlign: "left",
                  border: "none",
                  background: isActive ? "var(--card-bg-color)" : "transparent",
                  padding: "8px 10px",
                  borderRadius: 6,
                  cursor: "pointer",
                  color: "inherit",
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {page.title}
              </button>
            );
          })}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          height: "100%",
          padding: 24,
          boxSizing: "border-box",
        }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {activePage.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export const docsTool = definePlugin(() => ({
  tools: [
    {
      name: "docs",
      title: "Руководство",
      icon: BookIcon,
      router: route.create(":doc"),
      component: DocsToolView,
    },
  ],
}));

// Добавляйте новые страницы документации в /sanity/docs/*.md
// Файлы сортируются по числовому префиксу (01-, 02-...), заголовок берется из строки "# Title".
