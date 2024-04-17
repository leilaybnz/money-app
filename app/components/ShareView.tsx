import styles from "../styles/shareView.module.css";
import ActionCard from "./ActionCard";

export default function ShareView() {
  return (
    <section className={styles.container}>
      <h3>Acciones Coca-Cola</h3>
      <ShareView />
      <ActionCard />
    </section>
  );
}
