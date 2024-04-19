import { Money, Share } from "~/types";
import styles from "../styles/dashboard.module.css";
import Sidebar from "./Sidebar";
import TotalValueSection from "./TotalValueSection";

interface DashboardProps {
  money: Money;
  shares: Share;
}

export default function Dashboard({ money, shares }: DashboardProps) {
  return (
    <main className={styles.container}>
      <Sidebar shares={shares} />
      {/* <pre>{JSON.stringify(money, null, 2)}</pre>
      <pre>{JSON.stringify(shares, null, 2)}</pre> */}
      <TotalValueSection money={money} />
      {/* <ShareView share={share} /> */}
    </main>
  );
}
