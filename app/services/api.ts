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
  },
};
