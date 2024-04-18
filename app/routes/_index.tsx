import type { MetaFunction } from "@remix-run/node";
import Dashboard from "~/components/Dashboard";

export const meta: MetaFunction = () => {
  return [{ title: "Show me my money!" }];
};

export default function Index() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
