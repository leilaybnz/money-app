import { Money } from "~/types";
import styles from "../styles/totalValue.module.css";

interface TotalValuesProps {
  money: Money[];
}

export default function TotalValues({ money }: TotalValuesProps) {
  return money.map((money) => (
    <section className={styles.container} key={money.currency}>
      <h2 className={styles.title}>
        Valor total cartera: {money.currency}
        {" " + money.amount}
      </h2>
      <img src="../../public/mock.png" alt="grafico" className={styles.img} />
    </section>
  ));
}
