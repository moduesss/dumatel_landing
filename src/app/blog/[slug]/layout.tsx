import type { ReactNode } from "react";
import { getPostSlugs } from "@/lib/sanity";

const EMPTY_BLOG_SLUG = "__empty__";

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const slugs = await getPostSlugs();
    if (slugs.length === 0) {
      return [{ slug: EMPTY_BLOG_SLUG }];
    }
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.warn("Failed to load post slugs for static export", error);
    return [{ slug: EMPTY_BLOG_SLUG }];
  }
}

export default function BlogPostLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
