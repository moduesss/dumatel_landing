import Container from "@/components/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import styles from "./Pricing.module.scss";

const tiers = [
  {
    name: "Starter",
    price: "$29",
    description: "For teams validating product-market fit.",
  },
  {
    name: "Growth",
    price: "$89",
    description: "For fast-moving teams with high volume traffic.",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored compliance and dedicated support.",
  },
];

export default function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <Container>
        <SectionTitle
          eyebrow="Pricing"
          title="Plans that scale with your roadmap."
          description="Start small and unlock more power as your stack grows."
        />
        <div className={styles["pricing__grid"]}>
          {tiers.map((tier) => (
            <Card key={tier.name}>
              <h3>{tier.name}</h3>
              <p className={styles["pricing__price"]}>{tier.price}</p>
              <p>{tier.description}</p>
              <Button href="#cta" variant="ghost">
                Choose plan
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
