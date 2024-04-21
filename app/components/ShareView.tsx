import { Share } from "~/types";
import styles from "../styles/shareView.module.css";
import ActionCard from "./BuyCard";
import ValueCard from "./ValueCard";

interface ShareViewProps {
  share: Share;
}

export default function ShareView({ share }: ShareViewProps) {
  return (
    <section className={styles.container}>
      {/* <pre>{JSON.stringify(share, null, 2)}</pre> */}
      <h3 className={styles.title}>Acciones {share.name}</h3>
      <ValueCard share={share} />
      <section className={styles.cardsContainer}>
        <ActionCard share={share} />
        <ActionCard share={share} />
      </section>
    </section>
  );
}
