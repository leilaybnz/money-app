import { Link } from "@remix-run/react";
import styles from "../styles/card.module.css";

const shares = [
  {
    id: "1",
    name: "Bonos Coca-Cola",
    amount: "200",
  },
  { id: "2", name: "Bonos Coca-Cola", amount: "200" },
  {
    id: "3",
    name: "Bonos Coca-Cola",
    amount: "200",
  },
  { id: "4", name: "Bonos Coca-Cola", amount: "200" },
];

export default function MyInvestments() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Mis inversiones</h3>
      <hr className={styles.divider} />
      <ul className={styles.list}>
        {shares.map((share) => (
          <Link
            to={"/${share.id}"}
            key={share.id}
            className={`${styles.item} ${styles.activeLink}`}
          >
            <li>
              {share.name}: <span>{share.amount}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
