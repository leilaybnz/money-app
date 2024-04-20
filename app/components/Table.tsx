import { Money, Share } from "~/types";
import styles from "../styles/table.module.css";

interface TableProps {
  money: Money;
  shares: Share[];
}

export default function Table({ money, shares }: TableProps) {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr className={styles.row}>
          <th scope="col">Tipo</th>
          <th scope="col">Valor actual</th>
          <th scope="col">Cantidad</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.row}>
          <th scope="row" className={styles.heading}>
            {money.currency}
          </th>
          <td className={styles.data}>{money.amount}</td>
          <td className={styles.data}>{money.amount}</td>
        </tr>
        {shares.map((share) => (
          <tr key={share.name} className={styles.row}>
            <th scope="row" className={styles.heading}>
              {share.name}
            </th>
            <td className={styles.data}>
              {share.currency}
              {share.price}
            </td>
            <td className={styles.data}>{share.quantityOwned}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
