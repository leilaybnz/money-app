import styles from "../styles/shareView.module.css";
import ActionCard from "./ActionCard";
import ValueCard from "./ValueCard";

export default function ShareView() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Acciones Coca-Cola</h3>
      <ValueCard />
      <section className={styles.cardsContainer}>
        <ActionCard action="Comprar" />
        <ActionCard action="Vender" />
      </section>
    </section>
  );
}
