import { Savings } from "~/types";
import styles from "../styles/dashboard.module.css";
import Sidebar from "./Sidebar";
import TotalValueSection from "./TotalValueSection";

// const share: Share = {
//   name: "Coca-Cola",
//   currentValue: 200,
//   quantity: 400,
//   price: 20,
// };

const savings: Savings = {
  name: "ARS",
  quantity: 1000000,
};

export default function Dashboard() {
  return (
    <main className={styles.container}>
      <Sidebar />
      <TotalValueSection savings={savings} />
      {/* <ShareView share={share} /> */}
    </main>
  );
}
