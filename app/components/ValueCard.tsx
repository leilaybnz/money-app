import { Share } from "~/types";
import styles from "../styles/valueCard.module.css";
import { formatMoney } from "~/utils";

interface ValueCardProps {
  share: Share;
}

export default function ValueCard({ share }: ValueCardProps) {
  return (
    <section className={styles.container}>
      <h4 className={styles.title}>Valores</h4>
      <hr className={styles.divider} />
      <ul className={styles.list}>
        <li>Cantidad: {share.quantityOwned} unidades</li>{" "}
        <li>
          Cotizacion: {share.currency}
          {formatMoney(share.price)}/unidad
        </li>
        <li>
          Valor actual: {share.currency}
          {formatMoney(share.price * share.quantityOwned)}
        </li>
      </ul>
    </section>
  );
}
