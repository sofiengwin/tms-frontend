import { FetchQl } from "../../lib/client";
import { ICreateDriver, driverFields } from "../models/Driver";
import { IPayment } from "../models/Payment";
import { adminFields } from "../models/Admin";

const QUERY = `
  query fetchDriver($driverId: ID!) {
    fetchDriver(driverId: $driverId) {
      ${driverFields}
      payments {
        amount
        createdAt
        cashier {
          ${adminFields}
        }
      }
    }
  }
`;

export type DriverType = ICreateDriver & {payments: IPayment}

interface Response {
  fetchDriver: DriverType;
}

export default async function fetchDriver(client: FetchQl, driverId: number) {
  const response: Response = await client(QUERY, {driverId});

  return response.fetchDriver
}