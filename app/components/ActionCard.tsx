import { Share } from "~/types";
import styles from "../styles/actionCard.module.css";

interface ActionCardProps {
  action: string;
  share: Share;
}

export default function ActionCard({ action, share }: ActionCardProps) {
  return (
    <section className={styles.container}>
      <input type="number" min={0} className={styles.input} />{" "}
      <span className={styles.span}>
        {" "}
        = {share.currency}
        {share.price}{" "}
      </span>
      <button className={styles.button}>{action}</button>
    </section>
  );
}
