import { FetchQl } from "../../lib/client";

const QUERY = ``;

export interface ICollectPayment {
  motNumber: string;
}

interface Response {
  collectPayment: {
    data?: any;
    error?: any;
  }
}

export default async function collectPayment(client: FetchQl, data: ICollectPayment) {
  const response: Response = await client(QUERY, data as any);

  if (response.collectPayment.error) {
    // throw error
  }

  return response.collectPayment.data;
}