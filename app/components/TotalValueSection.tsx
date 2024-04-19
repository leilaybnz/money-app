import TotalValue from "./TotalValue";
import { Savings } from "~/types";

interface TotalValueSectionProps {
  savings: Savings;
}

export default function TotalValueSection({ savings }: TotalValueSectionProps) {
  return (
    <main>
      <TotalValue savings={savings} />
    </main>
  );
}
