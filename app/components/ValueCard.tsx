import { Share } from "~/types";
import styles from "../styles/valueCard.module.css";

interface ValueCardProps {
  share: Share;
}

export default function ValueCard({ share }: ValueCardProps) {
  return (
    <section className={styles.container}>
      <h4 className={styles.title}>Valores</h4>
      <hr className={styles.divider} />
      <ul className={styles.list}>
        <li>Cantidad: 20 unidades</li>
        <li>
          Cotizacion: {share.currency}
          {share.price}/unidad
        </li>
        <li>Valor actual: AR$ 200</li>
      </ul>
    </section>
  );
}
