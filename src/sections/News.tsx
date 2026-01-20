// import Container from "@/components/Container";
// import { getNews } from "@/lib/sanity";
// import styles from "./News.module.scss";

// export default async function News() {
//   const items = await getNews();

//   return (
//     <section className={styles.news} id="news">
//       <Container>
//         <SectionTitle
//           eyebrow="News"
//           title="Product updates and platform stories."
//           description="Publish posts in Sanity to populate this section."
//         />
//         <div className={styles["news__grid"]}>
//           {items.length === 0 ? (
//             <p className={styles["news__empty"]}>
//               No news yet. Add entries in Sanity to see updates here.
//             </p>
//           ) : (
//             items.map((item) => (
//               <article className={styles["news__card"]} key={item._id}>
//                 <p className={styles["news__date"]}>
//                   {item.publishedAt ?? ""}
//                 </p>
//                 <h3>{item.title}</h3>
//                 {item.excerpt ? <p>{item.excerpt}</p> : null}
//               </article>
//             ))
//           )}
//         </div>
//       </Container>
//     </section>
//   );
// }
