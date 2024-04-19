import styles from "../styles/actionCard.module.css";

interface ActionCardProps {
  action: string;
}

export default function ActionCard({ action }: ActionCardProps) {
  return (
    <section className={styles.container}>
      <input type="number" min={0} className={styles.input} />{" "}
      <span className={styles.span}> = AR$ 200.000 </span>
      <button className={styles.button}>{action}</button>
    </section>
  );
}
