import styles from "../styles/valueCard.module.css";

export default function ValueCard() {
  return (
    <section className={styles.container}>
      <h4 className={styles.title}>Valores</h4>
      <hr className={styles.divider}/>
      <ul className={styles.list}>
        <li>Cantidad: 200 unidades</li>
        <li>Cotizacion: AR$ 2000/unidad</li>
        <li>Valor actual: AR$ 400.000</li>
      </ul>
    </section>
  );
}
