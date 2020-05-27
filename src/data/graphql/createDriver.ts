
import {driverFields, ICreateDriver} from '../models/Driver'
import { FetchQl } from '../../lib/client';

const QUERY = `
  mutation createUser($name: String!, $phoneNumber: String!, $motNumber: String!, $address: String!, $areaOfOperation: String!, $hometown: String!, $state: String!) {
    createUser(input: {name: $name, phoneNumber: $phoneNumber, motNumber: $motNumber, address: $address, areaOfOperation: $areaOfOperation, hometown: $hometown, state: $state}) {
      driver {
        ${driverFields}
      }
      errors {
        field
        code
      }
    }
  }
`;

interface Response {
  createUser: {
    driver?: Partial<ICreateDriver>;
    errors?: any;
  }
}

export default async function createDriver(client: FetchQl, data: ICreateDriver) {
  const response: Response = await client(QUERY, data as any)
  console.log({response}, 'create driver')
  if (response.createUser.errors) {
    return response.createUser
  }

 return response.createUser;
}