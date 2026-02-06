import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/sanity";
import Container from "@/components/Container";
import { withBasePath } from "@/lib/paths";
import styles from "./page.module.scss";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const PAGE_SIZE = 9;

type PageProps = {
  searchParams?: {
    q?: string;
    page?: string;
  };
};

const EN_TO_RU: Record<string, string> = {
  "`": "ё",
  q: "й",
  w: "ц",
  e: "у",
  r: "к",
  t: "е",
  y: "н",
  u: "г",
  i: "ш",
  o: "щ",
  p: "з",
  "[": "х",
  "]": "ъ",
  a: "ф",
  s: "ы",
  d: "в",
  f: "а",
  g: "п",
  h: "р",
  j: "о",
  k: "л",
  l: "д",
  ";": "ж",
  "'": "э",
  z: "я",
  x: "ч",
  c: "с",
  v: "м",
  b: "и",
  n: "т",
  m: "ь",
  ",": "б",
  ".": "ю",
};

const RU_TO_EN: Record<string, string> = Object.entries(EN_TO_RU).reduce(
  (acc, [en, ru]) => {
    acc[ru] = en;
    return acc;
  },
  {} as Record<string, string>
);

const formatDate = (value?: string) => {
  if (!value) return "";
  const formatted = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
  return formatted.replace(" г.", "").replace("\u00A0г.", "");
};

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^a-z0-9а-я]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

const swapLayout = (value: string, map: Record<string, string>) =>
  value
    .split("")
    .map((char) => map[char] ?? char)
    .join("");

const buildPageItems = (current: number, total: number) => {
  if (total <= 8) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  if (current <= 4) {
    return [1, 2, 3, 4, 5, 6, 7, "ellipsis", total];
  }

  if (current >= total - 3) {
    return [1, "ellipsis", total - 6, total - 5, total - 4, total - 3, total - 2, total - 1, total];
  }

  return [1, "ellipsis", current - 2, current - 1, current, current + 1, current + 2, "ellipsis", total];
};

export default async function BlogPage({ searchParams }: PageProps) {
  const posts = await getPosts();
  const rawQueryValue = Array.isArray(searchParams?.q)
    ? searchParams?.q[0]
    : searchParams?.q;
  const rawQuery = typeof rawQueryValue === "string" ? rawQueryValue.trim() : "";
  const queryVariants = new Set<string>();

  if (rawQuery) {
    queryVariants.add(normalizeText(rawQuery));
    queryVariants.add(normalizeText(swapLayout(rawQuery.toLowerCase(), EN_TO_RU)));
    queryVariants.add(normalizeText(swapLayout(rawQuery.toLowerCase(), RU_TO_EN)));
  }

  const tokenVariants = Array.from(queryVariants)
    .map((variant) => variant.split(" ").filter(Boolean))
    .filter((tokens) => tokens.length > 0);

  const filteredPosts =
    tokenVariants.length === 0
      ? posts
      : posts.filter((post) => {
          const category = post.categories?.[0]?.title ?? "";
          const haystack = normalizeText(
            [post.title, post.excerpt, post.author?.name, post.author?.role, category]
              .filter(Boolean)
              .join(" ")
          );
          return tokenVariants.some((tokens) =>
            tokens.some((token) => haystack.includes(token))
          );
        });

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const rawPageValue = Array.isArray(searchParams?.page)
    ? searchParams?.page[0]
    : searchParams?.page;
  const rawPage = Number(rawPageValue ?? 1);
  const currentPage = Number.isFinite(rawPage)
    ? Math.min(Math.max(1, rawPage), totalPages)
    : 1;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + PAGE_SIZE);
  const pageItems = buildPageItems(currentPage, totalPages);
  const emptyMessage = rawQuery
    ? "Ничего не найдено."
    : "Пока нет опубликованных постов.";

  const buildHref = (page: number) => {
    const params = new URLSearchParams();
    if (rawQuery) {
      params.set("q", rawQuery);
    }
    if (page > 1) {
      params.set("page", String(page));
    }
    const queryString = params.toString();
    return withBasePath(queryString ? `/blog?${queryString}` : "/blog");
  };

  return (
    <>
      <BlogHeader />
      <main className={styles.page}>
        <Container className={[styles["container"], styles["container__title"]].join(" ")}>
          <form className={styles.search} method="get" action={withBasePath("/blog")}>
            <div className={styles.searchField}>
              <Image
                src={"/icons/search_icon.svg"}
                alt=""
                width={22}
                height={22}
                className={styles.searchIcon}
              />
              <label className="visually-hidden" htmlFor="blog-search">
                Поиск по блогу
              </label>
              <input
                id="blog-search"
                name="q"
                className={styles.searchInput}
                placeholder="Введите запрос"
                defaultValue={rawQuery}
              />
            </div>
            <Button variant="primary" type="submit">
              Найти
            </Button>
          </form>

          <Button href="/" className={styles.back} variant="ghost">
            ←&nbsp;&nbsp;Назад
          </Button>
        </Container>

        <section className={styles.results}>
          <Container className={styles.container}>
            {filteredPosts.length === 0 ? (
              <p className={styles.empty}>{emptyMessage}</p>
            ) : (
              <>
                <div className={styles.grid}>
                  {paginatedPosts.map((post) => {
                    const slug = post.slug?.current;
                    const category =
                      post.categories?.[0]?.title ?? "Новости Науки";
                    const dateLabel = formatDate(post.publishedAt);
                    const imageSrc =
                      post.coverImage?.asset?.url ?? "";

                    return (
                      <article key={post._id} className={styles.card}>
                        <div className={styles.cardMedia}>
                          <Image
                            src={imageSrc}
                            alt={post.title}
                            fill
                            sizes="(max-width: 1200px) 60vw, 253px"
                            className={styles.cardImage}
                          />
                        </div>
                        <div className={styles.cardMeta}>
                          <span className={styles.cardCategory}>{category}</span>
                          {dateLabel && (
                            <span className={styles.cardDate}>{dateLabel}</span>
                          )}
                        </div>
                        <h2 className={styles.cardTitle}>{post.title}</h2>
                        {post.excerpt && (
                          <p className={styles.cardExcerpt}>{post.excerpt}</p>
                        )}
                        {post.author?.name && (
                          <p className={styles.cardAuthor}>
                            Автор: {post.author.name}
                            {post.author.role && (
                              <span className={styles.cardAuthorRole}>
                                {" "}
                                — {post.author.role}
                              </span>
                            )}
                          </p>
                        )}
                        {slug ? (
                          <Button href={`/blog/${slug}`} variant="primary">
                            Читать
                          </Button>
                        ) : (
                          <span className={styles.cardButtonDisabled}>Читать</span>
                        )}
                      </article>
                    );
                  })}
                </div>

                <div className={styles.pagination} role="navigation" aria-label="Пагинация">
                  <Link
                    href={buildHref(Math.max(1, currentPage - 1))}
                    className={styles.paginationArrow}
                    aria-label="Предыдущая страница"
                  >
                    <Image
                      src={withBasePath("/icons/Arrow Left.svg")}
                      alt=""
                      width={45}
                      height={45}
                    />
                  </Link>
                  <div className={styles.paginationList}>
                    {pageItems.map((item, index) => {
                      if (item === "ellipsis") {
                        return (
                          <span key={`ellipsis-${index}`} className={styles.paginationItem}>
                            ...
                          </span>
                        );
                      }

                      const pageNumber = item as number;
                      const isActive = pageNumber === currentPage;
                      return (
                        <Link
                          key={pageNumber}
                          href={buildHref(pageNumber)}
                          className={`${styles.paginationItem} ${isActive ? styles.paginationItemActive : ""}`}
                        >
                          {pageNumber}
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    href={buildHref(Math.min(totalPages, currentPage + 1))}
                    className={styles.paginationArrow}
                    aria-label="Следующая страница"
                  >
                    <Image
                      src={withBasePath("/icons/Arrow Right.svg")}
                      alt=""
                      width={45}
                      height={45}
                    />
                  </Link>
                </div>
              </>
            )}
          </Container>

          <div className={styles.backdrop} aria-hidden="true">
            <Image
              src={"/svg/back.svg"}
              alt=""
              width={951}
              height={462}
              className={styles.backdropImage}
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
