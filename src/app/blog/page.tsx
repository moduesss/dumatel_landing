import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPosts } from "@/lib/sanity";
import Container from "@/components/Container";
import styles from "./page.module.scss";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <main className={styles.page}>
        <Container className={styles.container}>
          <h1 className={styles.title}>Блог</h1>

          {posts.length === 0 ? (
            <p className={styles.empty}>Пока нет опубликованных постов.</p>
          ) : (
            <ul className={styles.list}>
              {posts.map((post) => {
                const slug = post.slug?.current;
                const dateLabel = post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("ru-RU")
                  : "";

                return (
                  <li key={post._id} className={styles.card}>
                    {dateLabel && (
                      <div className={styles.date}>{dateLabel}</div>
                    )}
                    {slug ? (
                      <Link href={`/blog/${slug}`} className={styles.link}>
                        {post.title}
                      </Link>
                    ) : (
                      <span className={styles.titleText}>{post.title}</span>
                    )}
                    {post.excerpt && (
                      <p className={styles.excerpt}>{post.excerpt}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
