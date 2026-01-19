import Container from "@/components/Container";
import Accordion from "@/components/ui/Accordion";
import SectionTitle from "@/components/ui/SectionTitle";
import styles from "./FAQ.module.scss";

const items = [
  {
    title: "Can we migrate without downtime?",
    content:
      "Yes. The rollout pipeline supports blue/green and phased cutovers.",
  },
  {
    title: "Do you support custom regions?",
    content:
      "Enterprise plans include bespoke regions and private networking options.",
  },
  {
    title: "What about on-call coverage?",
    content:
      "Dedicated support packages are available with 24/7 incident response.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.faq} id="faq">
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          title="Answers for security, scale, and support."
          description="Everything you need to get confident about the platform."
        />
        <Accordion items={items} />
      </Container>
    </section>
  );
}
