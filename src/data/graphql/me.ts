import { FetchQl } from "../../lib/client";
import {IAdmin, adminFields} from '../models/Admin';

const QUERY = `
  query me {
    me {
      ${adminFields}
    }
  }
`

interface Response {
  me: IAdmin
}

export default async function me(client: FetchQl) {
  // @ts-ignore
  const response: Response = await client(QUERY);
  console.log({response})

  // if (response.me.errors) {
  //   return response.me;
  // }

  return {admin: response.me }
}