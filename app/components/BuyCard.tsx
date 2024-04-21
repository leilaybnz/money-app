import { Share } from "~/types";
import styles from "../styles/actionCard.module.css";

interface CardProps {
  share: Share;
}

export default function BuyCard({ share }: CardProps) {
  return (
    <section className={styles.container}>
      <input type="number" min={0} className={styles.input} />{" "}
      <span className={styles.span}>
        {" "}
        = {share.currency}
        {share.price}{" "}
      </span>
      <button className={styles.button}>Comprar</button>
    </section>
  );
}
