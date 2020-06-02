import { FetchQl } from "../../lib/client";
import {IAdmin, adminFields} from '../models/Admin';


const QUERY = `
  mutation login($email: String!, $password: String!) {
    login(input: {email: $email, password: $password}) {
      hhh
      admin {
        ${adminFields}
      }
      errors {
        code
        field
      }
    }
  }
`

interface Response {
  login: {
    hhh?: string;
    admin?: IAdmin;
    errors?: any;
  }
}

export default async function login(client: FetchQl, {email, password}: {email: string, password: string}) {
  // @ts-ignore
  const response: Response = await client(QUERY, {email, password});
  console.log({response}, 'login')

  if (response.login.errors) {
    return response.login;
  }

  return response.login
}