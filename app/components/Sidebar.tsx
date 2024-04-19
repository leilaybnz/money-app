import MyInvestments from "./MyInvestments";
import OtherInvestments from "./OtherInvestments";
import styles from "../styles/sidebar.module.css";
import { Share } from "~/types";

interface SidebarProps {
  shares: Share[];
}

export default function Sidebar({ shares }: SidebarProps) {
  return (
    <aside className={styles.aside}>
      <MyInvestments shares={shares} />
      <OtherInvestments shares={shares} />
    </aside>
  );
}
