import Link from "next/link";

const MOCK_POSTS = [
  { title: "Первый пост", slug: "first-post", date: "2026-01-28" },
  { title: "Второй пост", slug: "second-post", date: "2026-01-29" },
];

export default function BlogPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>Блог</h1>

      <ul style={{ display: "grid", gap: 12, listStyle: "none", padding: 0 }}>
        {MOCK_POSTS.map((p) => (
          <li key={p.slug} style={{ border: "1px solid #ddd", padding: 12, borderRadius: 10 }}>
            <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>{p.date}</div>
            <Link href={`/blog/${p.slug}`} style={{ fontSize: 18, textDecoration: "none" }}>
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
