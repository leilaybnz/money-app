import styles from "../styles/card.module.css";

export default function OtherInvestments() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Otras inversiones</h3>
      <hr className={styles.divider} />
      <ul className={styles.list}>
        <li className={styles.item}>
          Bonos Coca-cola: <span>(200 unidades)</span>
        </li>
      </ul>
    </div>
  );
}
