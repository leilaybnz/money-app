import styles from "../styles/card.module.css";

export default function MyInvestments() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Mis inversiones</h3>
      <hr className={styles.divider} />
      <ul className={styles.list}>
        <li className={styles.item}>
          Pesos: <span>$100.000</span>
        </li>
        <li className={styles.item}>
          Bonos Coca-cola: <span>(200 unidades)</span>
        </li>
        <li className={styles.item}>
          Bonos A42: <span>(600 unidades)</span>
        </li>
        <li className={styles.item}>
          Pesos: <span>$100.000</span>
        </li>
        <li className={styles.item}>
          Bonos Coca-cola: <span>(200 unidades)</span>
        </li>
        <li className={styles.item}>
          Bonos A42: <span>(600 unidades)</span>
        </li>
      </ul>
    </div>
  );
}
