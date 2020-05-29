import { FetchQl } from "../../lib/client";
import { IAdmin, adminFields } from "../models/Admin";
import { ICreateDriver, driverFields } from "../models/Driver";
import { IPayment} from '../models/Payment';


const QUERY = `
  query listPayments {
    listPayments {
      amount
      createdAt
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
  listPayments: IPayment[]
}

export default async function fetchPayments (client: FetchQl) {
  const response: Response = await client(QUERY);

  return response.listPayments
}