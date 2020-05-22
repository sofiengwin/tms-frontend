import { FetchQl } from "../lib/client";
import collectPaymentCall, {ICollectPayment} from '../data/graphql/collectPayment';

export default class AppService {
  client: FetchQl;

  constructor(client: FetchQl) {
    this.client = client;
  }

  collectPayment = async (data: ICollectPayment) => {
    await collectPaymentCall(this.client, data)
  }
}