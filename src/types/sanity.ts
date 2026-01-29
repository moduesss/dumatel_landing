import type { PortableTextBlock } from "@sanity/types";

export type SanityImage = {
  asset?: {
    url?: string;
  };
};

export type Author = {
  name?: string;
  slug?: {
    current: string;
  };
  image?: SanityImage;
  role?: string;
};

export type Category = {
  title?: string;
  slug?: {
    current: string;
  };
  description?: string;
};

export type Post = {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  excerpt?: string;
  seoKeywords?: string[];
  publishedAt?: string;
  coverImage?: SanityImage;
  author?: Author;
  categories?: Category[];
  body?: PortableTextBlock[];
};

export type SiteSettings = {
  _id?: string;
  title?: string;
  description?: string;
  ogImage?: SanityImage;
};
