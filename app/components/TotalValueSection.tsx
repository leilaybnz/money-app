import styles from "../styles/totalValueSection.module.css";
import TotalValue from "./TotalValue";
import { Savings } from "~/types";

interface TotalValueSectionProps {
  savings: Savings;
}

export default function TotalValueSection({ savings }: TotalValueSectionProps) {
  return (
    <main className={styles.container}>
      <TotalValue savings={savings} />
    </main>
  );
}
