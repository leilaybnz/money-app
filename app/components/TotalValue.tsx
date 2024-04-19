import { Savings } from "~/types";
import styles from "../styles/totalValue.module.css";

interface TotalValueProps {
  savings: Savings;
}

export default function TotalValue({ savings }: TotalValueProps) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Valor total cartera: {savings.name}
        {" " + savings.quantity}
      </h2>
      <img src="../../public/mock.png" alt="grafico" className={styles.img} />
    </section>
  );
}
