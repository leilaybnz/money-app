import { Share } from "~/types";
import styles from "../styles/shareView.module.css";
import ActionCard from "./ActionCard";
import ValueCard from "./ValueCard";

interface ShareViewProps {
  share: Share;
}

export default function ShareView({ share }: ShareViewProps) {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Acciones {share.name}</h3>
      <ValueCard />
      <section className={styles.cardsContainer}>
        <ActionCard action="Comprar" share={share} />
        <ActionCard action="Vender" share={share} />
      </section>
    </section>
  );
}
