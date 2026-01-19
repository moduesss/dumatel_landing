import Container from "@/components/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import styles from "./Deployment.module.scss";

const steps = [
  "Connect your repo and select a runtime.",
  "Configure environments, secrets, and regions.",
  "Ship automatically on every merge with safe rollbacks.",
];

export default function Deployment() {
  return (
    <section className={styles.deployment} id="deployment">
      <Container>
        <SectionTitle
          eyebrow="Workflow"
          title="Deploy in minutes, not days."
          description="A guided release flow that keeps every environment predictable."
        />
        <ol className={styles["deployment__list"]}>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
