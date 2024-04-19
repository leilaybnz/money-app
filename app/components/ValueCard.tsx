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
        <li>Cantidad: {share.quantity} unidades</li>
        <li>Cotizacion: AR$ {share.price}/unidad</li>
        <li>Valor actual: AR$ {share.currentValue}</li>
      </ul>
    </section>
  );
}
