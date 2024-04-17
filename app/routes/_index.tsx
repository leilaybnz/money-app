import type { MetaFunction } from "@remix-run/node";
import Dashboard from "~/components/Dashboard";

export const meta: MetaFunction = () => {
  return [{ title: "Show me my money!" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Dashboard />
    </div>
  );
}
