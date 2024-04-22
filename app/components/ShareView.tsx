import { Share } from "~/types";
import styles from "../styles/shareView.module.css";
import BuyCard from "./BuyCard";
import ValueCard from "./ValueCard";
import SellCard from "./SellCard";

interface ShareViewProps {
  share: Share;
}

export default function ShareView({ share }: ShareViewProps) {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{share.name}</h3>
      <ValueCard share={share} />
      <section className={styles.cardsContainer}>
        <BuyCard share={share} />
        <SellCard share={share} />
      </section>
    </section>
  );
}
