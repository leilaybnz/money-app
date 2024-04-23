import TotalValue from "./TotalValue";
import { Money, Share } from "~/types";

interface TotalValueSectionProps {
  money: Money[];
  shares: Share[];
  fullAmount: number;
}

export default function TotalValueSection({
  money,
  shares,
  fullAmount,
}: TotalValueSectionProps) {
  return (
    <main>
      <TotalValue money={money} shares={shares} fullAmount={fullAmount} />
    </main>
  );
}
