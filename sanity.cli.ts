import { defineCliConfig } from "sanity/cli";

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

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
