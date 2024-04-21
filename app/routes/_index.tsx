import type { MetaFunction } from "@remix-run/node";
import Dashboard from "~/components/Dashboard";
import { api } from "~/services/api";
import { json, useLoaderData } from "@remix-run/react";
import TotalValueSection from "~/components/TotalValueSection";

export const meta: MetaFunction = () => {
  return [{ title: "Show me my money!" }];
};

export async function loader() {
  const [money, shares] = await Promise.all([
    api.savingsAccount.getMoney(),
    api.savingsAccount.getShares(),
  ]);
  return json({ money, shares });
}

export default function Index() {
  const { money, shares } = useLoaderData<typeof loader>();
  return (
    <Dashboard shares={shares}>
      <TotalValueSection money={money} shares={shares} />
    </Dashboard>
  );
}
