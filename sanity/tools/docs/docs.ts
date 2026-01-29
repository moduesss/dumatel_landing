/// <reference types="vite/client" />

type DocPage = {
  id: string;
  title: string;
  content: string;
  order: number;
};

const markdownFiles = import.meta.glob<string>("../../docs/*.md", {
  eager: true,
  as: "raw",
});

const extractTitle = (content: string): string | null => {
  const firstLine = content.split("\n").find((line) => line.trim().length > 0);
  if (!firstLine) {
    return null;
  }
  const match = firstLine.match(/^#\s+(.*)$/);
  return match ? match[1].trim() : null;
};

const prettifyFileName = (name: string): string => {
  const withoutPrefix = name.replace(/^\d+-/, "").replace(/\.md$/, "");
  if (!withoutPrefix) {
    return name;
  }
  return withoutPrefix
    .replace(/[-_]+/g, " ")
    .replace(/^\w/, (char) => char.toUpperCase());
};

const extractOrder = (name: string): number => {
  const match = name.match(/^(\d+)-/);
  return match ? Number(match[1]) : 999;
};

export const getDocsPages = (): DocPage[] => {
  const pages = Object.entries(markdownFiles).map(([path, content]) => {
    const fileName = path.split("/").pop() ?? path;
    const id = fileName.replace(/\.md$/, "");
    const text = String(content ?? "");
    const title = extractTitle(text) ?? prettifyFileName(fileName);
    const order = extractOrder(fileName);

    return {
      id,
      title,
      content: text,
      order,
    };
  });

  return pages.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
};
