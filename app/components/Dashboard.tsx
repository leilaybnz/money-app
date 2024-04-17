import styles from "../styles/dashboard.module.css";
import MyInvestments from "./MyInvestments";
import OtherInvestments from "./OtherInvestments";
import ShareView from "./ShareView";

export default function Dashboard() {
  return (
    <main className={styles.container}>
      <aside className={styles.aside}>
        <MyInvestments />
        <OtherInvestments />
      </aside>
      <ShareView />
    </main>
  );
}
