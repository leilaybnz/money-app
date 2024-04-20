import TotalValue from "./TotalValue";
import { Money, Share } from "~/types";

interface TotalValueSectionProps {
  money: Money[];
  shares: Share[];
}

export default function TotalValueSection({
  money,
  shares,
}: TotalValueSectionProps) {
  return (
    <main>
      <TotalValue money={money} shares={shares} />
    </main>
  );
}
