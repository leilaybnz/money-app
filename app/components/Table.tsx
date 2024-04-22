import { Money, Share } from "~/types";
import styles from "../styles/table.module.css";
import { formatMoney } from "~/utils";

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
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Valor actual</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.row}>
          <th scope="row" className={styles.heading}>
            Caja de ahorro
          </th>
          <td className={styles.data}>{money.currency}</td>
          <td className={styles.data}></td>
          <td className={styles.data}>
            {money.currency}
            {formatMoney(money.amount)}
          </td>
        </tr>
        {shares.filter(share => share.quantityOwned > 0).map((share) => (
          <tr key={share.name} className={styles.row}>
            <th scope="row" className={styles.heading}>
              {share.name}
            </th>
            <td className={styles.data}>{share.quantityOwned} unidades</td>
            <td className={styles.data}>
              {share.currency}
              {formatMoney(share.price)}
            </td>
            <td className={styles.data}>
              {money.currency}
              {formatMoney(share.quantityOwned * share.price)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
