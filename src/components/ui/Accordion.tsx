import type { AccordionItem } from "@/types/ui";
import styles from "./Accordion.module.scss";

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className={styles.accordion}>
      {items.map((item) => (
        <details key={item.title} className={styles["accordion__item"]}>
          <summary>{item.title}</summary>
          <p>{item.content}</p>
        </details>
      ))}
    </div>
  );
}
