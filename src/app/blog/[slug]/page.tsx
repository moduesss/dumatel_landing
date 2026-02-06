/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getPosts } from "@/lib/sanity";
import styles from "./page.module.scss";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const EMPTY_BLOG_SLUG = "__empty__";

const formatDate = (value?: string) => {
  if (!value) return "";
  const formatted = new Date(value).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formatted.replace(" г.", "");
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === EMPTY_BLOG_SLUG) {
    return (
      <>
        <Header />
        <main className={styles.page}>
          <div className={styles.article}>
            <h1 className={styles.title}>Блог</h1>
            <p className={styles.lead}>Пока нет опубликованных постов.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const dateLabel = formatDate(post.publishedAt);
  const relatedPosts = (await getPosts())
    .filter((item) => item.slug?.current && item.slug.current !== slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.article}>
          <Link className={styles.backButton} href="/blog">
            <span className={styles.backIcon} aria-hidden="true">
              ←
            </span>
            Назад
          </Link>

          <div className={styles.titleRow}>
            <h1 className={styles.title}>{post.title}</h1>
            {dateLabel && <p className={styles.date}>{dateLabel}</p>}
          </div>

          {post.coverImage?.asset?.url && (
            <div className={styles.cover}>
              <Image
                src={post.coverImage.asset.url}
                alt={post.title}
                fill
                sizes="(max-width: 1000px) 100vw, 923px"
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

          {post.author?.name && (
            <div className={styles.author}>
              {post.author.image?.asset?.url && (
                <Image
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  width={72}
                  height={72}
                  className={styles.authorAvatar}
                />
              )}
              <div className={styles.authorInfo}>
                <span className={styles.authorLabel}>Автор</span>
                <span className={styles.authorName}>{post.author.name}</span>
                {post.author.role && (
                  <span className={styles.authorRole}>{post.author.role}</span>
                )}
              </div>
            </div>
          )}
        </div>

        {relatedPosts.length > 0 && (
          <section className={styles.more}>
            <h2 className={styles.moreTitle}>Читайте больше интересных статей!</h2>
            <div className={styles.moreList}>
              {relatedPosts.map((item) => {
                const itemSlug = item.slug?.current;
                const cardDate = formatDate(item.publishedAt);
                const category = item.categories?.[0]?.title ?? "Новости Науки";

                return (
                  <article key={item._id} className={styles.card}>
                    <div className={styles.cardMedia}>
                      {item.coverImage?.asset?.url ? (
                        <Image
                          src={item.coverImage.asset.url}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 70vw, 316px"
                          className={styles.cardImage}
                        />
                      ) : (
                        <span className={styles.cardFallback} aria-hidden="true" />
                      )}
                    </div>

                    <div className={styles.cardMeta}>
                      <span className={styles.cardCategory}>{category}</span>
                      {cardDate && <span className={styles.cardDate}>{cardDate}</span>}
                    </div>

                    <h3 className={styles.cardTitle}>{item.title}</h3>

                    {itemSlug && (
                      <Link className={styles.cardButton} href={`/blog/${itemSlug}`}>
                        Читать
                      </Link>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
