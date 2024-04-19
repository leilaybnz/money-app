import TotalValue from "./TotalValue";
import { Money } from "~/types";

interface TotalValueSectionProps {
  money: Money[];
}

export default function TotalValueSection({ money }: TotalValueSectionProps) {
  return (
    <main>
      <TotalValue money={money} />
    </main>
  );
}
