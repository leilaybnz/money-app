import MyInvestments from "./MyInvestments";
import OtherInvestments from "./OtherInvestments";
import styles from "../styles/sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <MyInvestments />
      <OtherInvestments />
    </aside>
  );
}
