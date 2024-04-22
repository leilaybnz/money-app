import { Share } from "~/types";
import styles from "../styles/actionCard.module.css";
import { Form } from "@remix-run/react";
import { useState } from "react";

interface CardProps {
  share: Share;
}

export default function BuyCard({ share }: CardProps) {
  const [amount, setAmount] = useState(0);
  return (
    <Form className={styles.container} method="post">
      <input
        type="number"
        name="amount"
        min={0}
        className={styles.input}
        value={amount}
        onChange={(event) => {
          setAmount(parseInt(event.currentTarget.value));
        }}
      />{" "}
      <input hidden name="_type" value="buy" />
      <span className={styles.span}>
        {" "}
        = {share.currency}
        {Number.isNaN(amount) ? 0 : amount * share.price}
      </span>
      <button className={styles.button} type="submit">
        Comprar
      </button>
    </Form>
  );
}
