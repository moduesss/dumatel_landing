import Container from "@/components/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import styles from "./Security.module.scss";

const points = [
  {
    title: "Compliance ready",
    copy: "SOC 2-aligned controls with audit-ready logs by default.",
  },
  {
    title: "Granular access",
    copy: "Role-based policies with environment-specific permissions.",
  },
  {
    title: "Protected data",
    copy: "Encrypted secrets, managed keys, and continuous monitoring.",
  },
];

export default function Security() {
  return (
    <section className={styles.security} id="security">
      <Container>
        <SectionTitle
          eyebrow="Security"
          title="Protection without slowing the team."
          description="Automated safeguards keep every release compliant and resilient."
        />
        <div className={styles["security__grid"]}>
          {points.map((point) => (
            <Card key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.copy}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
