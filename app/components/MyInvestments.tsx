import { Link } from "@remix-run/react";
import styles from "../styles/card.module.css";
import { Money, Share } from "~/types";

interface MyInvestmentsProps {
  money: Money[];
  shares: Share[];
}

export default function MyInvestments({ shares }: MyInvestmentsProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Mis inversiones</h3>
      <hr className={styles.divider} />
      <ul className={styles.list}>
        <Link to={"/"} className={`${styles.link} ${styles.activeLink}`}>
          <li className={styles.item}>
            <p className={styles.paragraph}>Caja de ahorro:</p>{" "}
            <span className={styles.span}>$200000</span>
          </li>
        </Link>
        {shares.map((share) => (
          <Link
            to={"/${share.id}"}
            key={share.name}
            className={`${styles.link} ${styles.activeLink}`}
          >
            <li className={styles.item}>
              <p className={styles.paragraph}>{share.name}:</p>{" "}
              <span className={styles.span}>
                {share.quantityOwned} unidades
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
