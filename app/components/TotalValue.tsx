import styles from "../styles/valorTotal.module.css";

export default function TotalValue() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Valor total cartera: AR$200.000</h2>
      <img src="../../public/mock.png" alt="grafico" className={styles.img} />
    </section>
  );
}
