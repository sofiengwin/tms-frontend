import { FetchQl } from "../lib/client";
import collectPaymentCall, {
  ICollectPayment,
} from "../data/graphql/collectPayment";

export default class AppService {
  client: FetchQl;
  isLogedin: boolean = false;

  constructor(client: FetchQl) {
    this.client = client;
  }

  collectPayment = async (data: ICollectPayment) => {
    await collectPaymentCall(this.client, data);
  };

  login = ({ email, password }: { email: string; password: string }) => {
    // pretend say u de login
    this.isLogedin = true;
  };
}
