import { Money, Share } from "~/types";
import styles from "../styles/totalValue.module.css";
import Table from "./Table";
import { formatMoney } from "~/utils";

interface TotalValuesProps {
  money: Money[];
  shares: Share[];
}

export default function TotalValues({ money, shares }: TotalValuesProps) {
  return money.map((money) => (
    <section className={styles.container} key={money.currency}>
      <h2 className={styles.title}>
        Valor total cartera: {money.currency}
        {formatMoney(money.amount)}
      </h2>
      <Table money={money} shares={shares} />
    </section>
  ));
}
