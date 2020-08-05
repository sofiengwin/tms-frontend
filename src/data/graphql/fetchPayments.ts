import { FetchQl } from "../../lib/client";
import {  adminFields } from "../models/Admin";
import {  driverFields } from "../models/Driver";
import { IPayment } from "../models/Payment";

const QUERY = `
  query listPayments {
    listPayments {
      amount
      createdAt
      paymentType
      cashier {
        ${adminFields}
      }
      driver {
        ${driverFields}
      }
    }
  }
`;

interface Response {
  listPayments: IPayment[];
}

export default async function fetchPayments(client: FetchQl) {
  const response: Response = await client(QUERY);

  return response.listPayments;
}
