import { Money, Share } from "~/types";
import styles from "../styles/dashboard.module.css";
import Sidebar from "./Sidebar";

interface DashboardProps {
  children: React.ReactNode;
  shares: Share[];
  money: Money[];
}

export default function Dashboard({ children, shares, money }: DashboardProps) {
  return (
    <main className={styles.container}>
      <Sidebar shares={shares} money={money} />
      {children}
    </main>
  );
}
