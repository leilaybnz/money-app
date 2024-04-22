import { Money, Share } from "~/types";

const baseUrl = process.env.BASE_URL;

export const api = {
  savingsAccount: {
    getMoney: async () => {
      const response = await fetch(`${baseUrl}/savingsAccount`);

      if (!response.ok) {
        throw new Error("Could not get money account data.");
      }

      const data = (await response.json()) as { data: Money[] };

      return data.data;
    },
    getShares: async () => {
      const response = await fetch(`${baseUrl}/savingsAccount/shares`);

      if (!response.ok) {
        throw new Error("Could not get shares data.");
      }

      const data = (await response.json()) as { data: Share[] };

      return data.data;
    },
    getShare: async (shareName: string) => {
      const response = await fetch(
        `${baseUrl}/savingsAccount/shares/${shareName}`
      );

      if (!response.ok) {
        throw new Error("Could not get share data.");
      }

      const data = (await response.json()) as { data: Share };

      return data.data;
    },
    buyShares: async (shareName: string, amount: number) => {
      const response = await fetch(
        `${baseUrl}/savingsAccount/shares/${shareName}/buy`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return { status: "FAILED", error: errorData.data.error } as const;
      }

      (await response.json()) as { status: "OK" };

      return { status: "OK" } as const;
    },
    sellShares: async (shareName: string, amount: number) => {
      const response = await fetch(
        `${baseUrl}/savingsAccount/shares/${shareName}/sell`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return { status: "FAILED", error: errorData.data.error } as const;
      }

      (await response.json()) as { status: "OK" };

      return { status: "OK" } as const;
    },
  },
};
