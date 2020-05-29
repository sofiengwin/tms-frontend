import { FetchQl } from "../../lib/client";
import {IPayment} from '../models/Payment'
import {adminFields} from '../models/Admin'
import {driverFields} from '../models/Driver'
import errorHandler from '../../lib/errorHandler';

const QUERY = `
  mutation recordPayment($driverId: ID!, $cashierId: ID!, $amount: Int!) {
    recordPayment(input: {driverId: $driverId, cashierId: $cashierId, amount: $amount}) {
      payment {
        driver {
          ${driverFields}
        }
        cashier {
          ${adminFields}
        }
        amount
      }
      errors {
        field
        code
      }
    }
  }
`;

export interface IRecordPayment {
  cashierId: number;
  driverId: number;
  amount: number;
}

interface Response {
  recordPayment: {
    payment?: IPayment,
    errors?: any;
  }
}

export default async function recordPayment(client: FetchQl, data: IRecordPayment) {
  const response: Response = await client(QUERY, data as any);
  console.log({response})

  if (response.recordPayment.errors) {
    return {errors: errorHandler(response.recordPayment.errors)}
  }

  return response.recordPayment;
}