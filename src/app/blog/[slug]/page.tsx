/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { getPostBySlug } from "@/lib/sanity";
import styles from "./page.module.scss";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const EMPTY_BLOG_SLUG = "__empty__";

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === EMPTY_BLOG_SLUG) {
    return (
      <>
        <Header />
        <main className={styles.page}>
          <Container className={styles.container} as="article">
            <header className={styles.header}>
              <h1 className={styles.title}>Блог</h1>
              <p className={styles.excerpt}>
                Пока нет опубликованных постов.
              </p>
            </header>
          </Container>
        </main>
        <Footer />
      </>
    );
  }
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const dateLabel = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("ru-RU")
    : "";

  return (
    <>
      <Header />
      <main className={styles.page}>
        <Container className={styles.container} as="article">
          <header className={styles.header}>
            {dateLabel && <p className={styles.date}>{dateLabel}</p>}
            <h1 className={styles.title}>{post.title}</h1>
            {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
          </header>

          {post.coverImage?.asset?.url && (
            <div className={styles.cover}>
              <Image
                src={post.coverImage.asset.url}
                alt={post.title}
                fill
                sizes="(max-width: 900px) 100vw, 1200px"
                className={styles.coverImage}
                priority
              />
            </div>
          )}

          {post.body && (
            <div className={styles.body}>
              <PortableText
                value={post.body}
                components={{
                  types: {
                    image: ({ value }) => {
                      const url = value?.asset?.url;
                      if (!url) {
                        return null;
                      }
                      return (
                        <img
                          src={url}
                          alt={value?.alt ?? ""}
                          className={styles.bodyImage}
                        />
                      );
                    },
                  },
                }}
              />
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
