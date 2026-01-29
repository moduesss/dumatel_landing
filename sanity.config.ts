import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { ruKZLocale } from "@sanity/locale-ru-kz";
import { docsTool } from "./sanity/tools/docs/DocsTool";
import { schemaTypes } from "./sanity/schemaTypes";

const fromEnv = (value: string | undefined, fallback: string) =>
  (value ?? fallback).trim();

const projectId = fromEnv(
  process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.SANITY_PROJECT_ID,
  "your-project-id"
);
const dataset = fromEnv(
  process.env.SANITY_STUDIO_DATASET ?? process.env.SANITY_DATASET,
  "production"
);
const previewUrl = fromEnv(
  process.env.SANITY_STUDIO_PREVIEW_URL ?? process.env.NEXT_PUBLIC_SITE_URL,
  "http://localhost:3000"
);

export default defineConfig({
  name: "default",
  title: "Dumatel",
  projectId,
  dataset,
  basePath: '/admin',
  schema: { types: schemaTypes },
  plugins: [structureTool(), ruKZLocale({ title: "Русский" }), docsTool()],
  document: {
    productionUrl: async (prev, context) => {
      const { document } = context;
      if (!document || document._type !== "post") {
        return previewUrl;
      }
      const slug =
        typeof document.slug === "object" &&
        document.slug &&
        "current" in document.slug
          ? (document.slug as { current?: string }).current ?? ""
          : "";

      if (!slug) {
        return previewUrl;
      }

      return `${previewUrl}/api/preview?slug=${slug}`;
    },
  },
});
