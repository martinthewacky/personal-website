import Card from "components/Card";
import styles from "./BioSection.module.css";

export default function BioSection() {
  return (
    <section className={styles.bioSection}>
      <h2 className={styles.bioHeading}>BIO</h2>
      <Card>
        <div></div>
      </Card>
    </section>
  );
}
