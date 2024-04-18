import styles from "../styles/actionCard.module.css";

export default function ActionCard({ action }) {
  return (
    <section className={styles.container}>
      <input type="number" min={0} className={styles.input} />{" "}
      <span className={styles.span}> = AR$ 200.000 </span>
      <button className={styles.button}>{action}</button>
    </section>
  );
}
