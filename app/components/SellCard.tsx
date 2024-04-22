import { Share } from "~/types";
import styles from "../styles/actionCard.module.css";
import { Form, useActionData } from "@remix-run/react";
import { useState } from "react";
import { action } from "~/routes/$shareName";
import { formatMoney } from "~/utils";

interface CardProps {
  share: Share;
}

export default function SellCard({ share }: CardProps) {
  const [amount, setAmount] = useState(0);
  const actionData = useActionData<typeof action>();

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
      <input hidden name="_type" value="sell" readOnly />
      <span className={styles.span}>
        {" "}
        = {share.currency}
        {formatMoney(Number.isNaN(amount) ? 0 : amount * share.price)}
      </span>
      <button className={styles.button} type="submit">
        Vender
      </button>
      {actionData?.error && (
        <span className={styles.error}>{actionData.error}</span>
      )}
    </Form>
  );
}
