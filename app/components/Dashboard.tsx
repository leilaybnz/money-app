import { Share } from "~/types";
import styles from "../styles/dashboard.module.css";
import Sidebar from "./Sidebar";

interface DashboardProps {
  children: React.ReactNode;
  shares: Share[];
}

export default function Dashboard({ children, shares }: DashboardProps) {
  return (
    <main className={styles.container}>
      <Sidebar shares={shares} />
      {/* <pre>{JSON.stringify(money, null, 2)}</pre> */}
      {children}
    </main>
  );
}
