import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Dashboard from "~/components/Dashboard";
import ShareView from "~/components/ShareView";
import { api } from "~/services/api";

export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.shareName) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  const [share, shares] = await Promise.all([
    api.savingsAccount.getShare(params.shareName),
    api.savingsAccount.getShares(),
  ]);

  if (!share) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  return json({ share, shares });
}

export default function Share() {
  const { share, shares } = useLoaderData<typeof loader>();
  return (
    <Dashboard shares={shares}>
      <ShareView share={share} />
    </Dashboard>
  );
}
