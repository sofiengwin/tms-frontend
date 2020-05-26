import { FetchQl } from "../../lib/client";
export {IAdmin} from '../models/Admin';


const QUERY = `
  mutation login($email: String!, $password: String!) {
    login(input: {email: $email, password: $password}) {
      hhh
      admin {
        name
        email
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

export default function login(client: FetchQl, {email, password}: {email: string, password: string}) {
  const response: Response = client(QUERY, {email, password});

  if (response.login.errors) {
    throw response.login.errors;
  }

  return response.login
}