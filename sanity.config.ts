import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { ruKZLocale } from "@sanity/locale-ru-kz";
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

export default defineConfig({
  name: "default",
  title: "Dumatel",
  projectId,
  dataset,
  basePath: '/admin',
  schema: { types: schemaTypes },
  plugins: [structureTool(), ruKZLocale({ title: "Русский" })],
});
