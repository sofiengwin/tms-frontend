import { FetchQl } from "../../lib/client";
import { driverFields, ICreateDriver } from "../models/Driver";


const QUERY = `
  query listDrivers {
    listDrivers {
      ${driverFields}
    }
  }
`;
interface Response {
  listDrivers: ICreateDriver[];
}
export default async function fetchDrivers(client: FetchQl) {
  const response: Response = await client(QUERY);

  return response.listDrivers;
}