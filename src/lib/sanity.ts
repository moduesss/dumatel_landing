import { createClient, type ClientConfig } from "@sanity/client";
import { env, hasSanityConfig } from "@/lib/env";
import {
  postListQuery,
  postBySlugQuery,
  postBySlugPreviewQuery,
  postSlugsQuery,
  settingsQuery,
} from "@/lib/sanity.queries";
import type { Post, SiteSettings } from "@/types/sanity";

const clientConfig: ClientConfig | null = hasSanityConfig
  ? {
      projectId: env.sanity.projectId,
      dataset: env.sanity.dataset,
      apiVersion: env.sanity.apiVersion,
      useCdn: !env.sanity.readToken,
      token: env.sanity.readToken ?? undefined,
    }
  : null;

export const sanityClient = clientConfig ? createClient(clientConfig) : null;
const previewClient = clientConfig
  ? createClient({
      ...clientConfig,
      useCdn: false,
      perspective: "previewDrafts",
    })
  : null;

const safeFetch = async <T>(
  query: string,
  params: Record<string, unknown> = {},
  options: { preview?: boolean } = {}
): Promise<T | null> => {
  const client = options.preview ? previewClient : sanityClient;
  if (!client) {
    return null;
  }

  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.warn("Sanity fetch failed", error);
    return null;
  }
};

export const getSettings = async (): Promise<SiteSettings | null> => {
  const data = await safeFetch<SiteSettings>(settingsQuery);
  return data ?? null;
};

export const getPosts = async (): Promise<Post[]> => {
  const data = await safeFetch<Post[]>(postListQuery);
  return data ?? [];
};

export const getPostBySlug = async (
  slug: string,
  preview = false
): Promise<Post | null> => {
  const query = preview ? postBySlugPreviewQuery : postBySlugQuery;
  const data = await safeFetch<Post>(query, { slug }, { preview });
  return data ?? null;
};

export const getPostSlugs = async (): Promise<string[]> => {
  const data = await safeFetch<{ slug: string }[]>(postSlugsQuery);
  return (data ?? [])
    .map((item) => item.slug)
    .filter((slug): slug is string => Boolean(slug));
};
