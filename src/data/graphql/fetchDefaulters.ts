import { FetchQl } from "../../lib/client";
import { driverFields, ICreateDriver } from "../models/Driver";

const QUERY = `
  query fetchDefaulters {
    fetchDefaulters {
      monday {
        ${driverFields}
      }
      tuesday {
        ${driverFields}
      }
      wednesday {
        ${driverFields}
      }
      thursday {
        ${driverFields}
      }
      friday {
        ${driverFields}
      }
    }
  }
`;

interface Response {
  fetchDefaulters: Dict<ICreateDriver>
}

export default async function fetchDefaulters(client: FetchQl) {
  const response: Response = await client(QUERY);

  return response.fetchDefaulters;
}