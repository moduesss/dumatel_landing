export const postListQuery = `*[
  _type == "post" &&
  defined(publishedAt) &&
  publishedAt <= now() &&
  !(_id in path("drafts.**"))
] | order(publishedAt desc)[0...12] {
  _id,
  title,
  slug,
  excerpt,
  seoKeywords,
  publishedAt,
  coverImage {
    asset-> {
      url
    }
  },
  author-> {
    name,
    slug,
    role,
    image {
      asset-> {
        url
      }
    }
  },
  categories[]-> {
    title,
    slug
  }
}`;

export const postBySlugQuery = `*[
  _type == "post" &&
  slug.current == $slug &&
  defined(publishedAt) &&
  publishedAt <= now() &&
  !(_id in path("drafts.**"))
][0] {
  _id,
  title,
  slug,
  excerpt,
  seoKeywords,
  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        url
      }
    }
  },
  publishedAt,
  coverImage {
    asset-> {
      url
    }
  },
  author-> {
    name,
    slug,
    role,
    image {
      asset-> {
        url
      }
    }
  },
  categories[]-> {
    title,
    slug
  }
}`;

export const postSlugsQuery = `*[
  _type == "post" &&
  defined(slug.current) &&
  defined(publishedAt) &&
  publishedAt <= now() &&
  !(_id in path("drafts.**"))
]{
  "slug": slug.current
}`;

export const settingsQuery = `*[_type == "settings"][0] {
  _id,
  title,
  description,
  ogImage {
    asset-> {
      url
    }
  }
}`;
