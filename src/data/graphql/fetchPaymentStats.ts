import { FetchQl } from "../../lib/client";
import { adminFields, IAdmin } from "../models/Admin";

export const QUERY = `
  query fetchPaymentStats($cashierId: ID) {
    fetchPaymentStats(cashierId: $cashierId) {
      yearlyTotal
      monthlyTotal
      today
      dailyTotals {
        date
        amount
      }
      cashier {
        ${adminFields}
      }
    }
  }
`;

interface Response {
  fetchPaymentStats: {
    yearlyTotal: number;
    monthlyTotal: number;
    today: number;
    dailyTotals: {
      date: string;
      amount: number;
    }
    cashier?: IAdmin;
  }
}

export default async function fetchPaymentStats(client: FetchQl, cashierId?: string) {
  const response: Response = await client(QUERY, {cashierId} as any);

  return response.fetchPaymentStats;
}