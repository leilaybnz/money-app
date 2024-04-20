import type { MetaFunction } from "@remix-run/node";
import Dashboard from "~/components/Dashboard";
import { api } from "~/services/api";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Show me my money!" }];
};

export async function loader() {
  const money = await api.savingsAccount.getMoney();
  const shares = await api.savingsAccount.getShares();
  return { money, shares };
}

export default function Index() {
  const { money, shares } = useLoaderData<typeof loader>();
  return <Dashboard />;
}
