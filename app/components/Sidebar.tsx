import MyInvestments from "./MyInvestments";
import OtherInvestments from "./OtherInvestments";
import styles from "../styles/sidebar.module.css";
import { Money, Share } from "~/types";

interface SidebarProps {
  shares: Share[];
  money: Money[];
}

export default function Sidebar({ shares, money }: SidebarProps) {
  return (
    <aside className={styles.aside}>
      <MyInvestments shares={shares} money={money} />
      <OtherInvestments shares={shares} />
    </aside>
  );
}
