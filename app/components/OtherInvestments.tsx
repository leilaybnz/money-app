import { Link } from "@remix-run/react";
import styles from "../styles/card.module.css";
import { Share } from "~/types";

interface OtherInvestmentsProps {
  shares: Share[];
}

export default function OtherInvestments({ shares }: OtherInvestmentsProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Otras inversiones</h3>
      <hr className={styles.divider} />
      <ul className={styles.list}>
        {shares.map((share) => (
          <Link
            to={`/${share.name}`}
            key={share.name}
            className={`${styles.link} ${styles.activeLink}`}
          >
            <li className={styles.item}>
              <p className={styles.paragraph}>{share.name}:</p>{" "}
              <span className={styles.span}>{share.currency}{share.price}/unidad</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
