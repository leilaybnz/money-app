import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
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
  const [share, shares, money] = await Promise.all([
    api.savingsAccount.getShare(params.shareName),
    api.savingsAccount.getShares(),
    api.savingsAccount.getMoney(),
  ]);

  if (!share) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  return json({ share, shares, money });
}

export async function action({ request, params }: ActionFunctionArgs) {
  if (!params.shareName) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  const body = await request.formData();
  const amount = body.get("amount");
  const type = body.get("_type");

  if (type === "buy") {
    if (!amount || typeof amount !== "string") {
      throw new Response(null, {
        status: 400,
        statusText: "Amount is non existent",
      });
    }

    const status = await api.savingsAccount.buyShares(
      params.shareName,
      parseInt(amount)
    );

    if (status.status === "FAILED") {
      return json({ error: status.error, type: "buy" });
    }

    return redirect("/");
  }

  if (type === "sell") {
    if (!amount || typeof amount !== "string") {
      throw new Response(null, {
        status: 400,
        statusText: "Amount is non existent",
      });
    }

    const status = await api.savingsAccount.sellShares(
      params.shareName,
      parseInt(amount)
    );

    if (status.status === "FAILED") {
      return json({ error: status.error, type: "sell" });
    }

    return redirect("/");
  }

  throw new Error("Invalid action type");
}

export default function Share() {
  const { share, shares, money } = useLoaderData<typeof loader>();
  return (
    <Dashboard shares={shares} money={money}>
      <ShareView share={share} />
    </Dashboard>
  );
}
