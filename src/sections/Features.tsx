import Container from "@/components/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import styles from "./Features.module.scss";

const features = [
  {
    title: "Unified deployments",
    copy: "Launch services, workers, and edge functions from a single workflow.",
  },
  {
    title: "Live observability",
    copy: "Trace every request with real-time dashboards and instant rollbacks.",
  },
  {
    title: "Composable APIs",
    copy: "Mix infrastructure primitives that scale with your team and budget.",
  },
];

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <Container>
        <SectionTitle
          eyebrow="Platform"
          title="Everything you need to go from idea to scale."
          description="Modern tooling for teams that ship fast but still need tight control."
        />
        <div className={styles["features__grid"]}>
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
