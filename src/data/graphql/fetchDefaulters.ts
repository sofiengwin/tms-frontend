import { FetchQl } from "../../lib/client";
import { driverFields, ICreateDriver } from "../models/Driver";

const QUERY = `
  query fetchDefaulters {
    fetchDefaulters {
      monday {
        driver {
          ${driverFields}
        }
        defaultedAt
      }
      tuesday {
        driver {
          ${driverFields}
        }
        defaultedAt
      }
      wednesday {
        driver {
          ${driverFields}
        }
        defaultedAt
      }
      thursday {
        driver {
          ${driverFields}
        }
        defaultedAt
      }
      friday {
        driver {
          ${driverFields}
        }
        defaultedAt
      }
    }
  }
`;

interface Response {
  fetchDefaulters: Dict<{ driver: ICreateDriver; defaultedAt: string }>;
}

export default async function fetchDefaulters(client: FetchQl) {
  const response: Response = await client(QUERY);
  console.log({ response });

  return response.fetchDefaulters;
}
