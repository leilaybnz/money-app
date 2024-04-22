import { Link } from "@remix-run/react";
import styles from "../styles/card.module.css";
import { Money, Share } from "~/types";
import { formatMoney } from "~/utils";

interface MyInvestmentsProps {
  shares: Share[];
  money: Money[];
}

export default function MyInvestments({ shares, money }: MyInvestmentsProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Mis inversiones</h3>
      <hr className={styles.divider} />
      <ul className={styles.list}>
        <Link to={"/"} className={`${styles.link} ${styles.activeLink}`}>
          <li className={styles.item}>
            <p className={styles.paragraph}>Caja de ahorro:</p>{" "}
            <span className={styles.span}>
              {money[0].currency}
              {formatMoney(money[0].amount)}
            </span>
          </li>
        </Link>
        {shares
          .filter((share) => share.quantityOwned > 0)
          .map((share) => (
            <Link
              to={`/${share.name}`}
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
