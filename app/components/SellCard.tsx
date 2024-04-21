import { Share } from "~/types";
import styles from "../styles/actionCard.module.css";

interface CardProps {
  share: Share;
}

export default function SellCard({ share }: CardProps) {
  return (
    <section className={styles.container}>
      <input type="number" min={0} className={styles.input} />{" "}
      <span className={styles.span}>
        {" "}
        = {share.currency}
        {share.price}{" "}
      </span>
      <button className={styles.button}>Vender</button>
    </section>
  );
}
