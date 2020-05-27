import {observable, action} from 'mobx';
import { FetchQl } from "../lib/client";
import collectPaymentCall, {
  ICollectPayment,
} from "../data/graphql/collectPayment";
import loginCall from '../data/graphql/login';
import {IAdmin} from '../data/models/Admin';
import meCall from '../data/graphql/me';


export default class AppService {
  client: FetchQl;
  @observable isLogedin: boolean = false;
  @observable isLoading: boolean = false
  admin: IAdmin | null = null;
  errors = observable.array<string>([]);

  constructor(client: FetchQl) {
    this.client = client;
  }

  collectPayment = async (data: ICollectPayment) => {
    await collectPaymentCall(this.client, data);
  };

  @action
  async login ({ email, password }: { email: string; password: string }, handleError: (errors: string[]) => void) {
    this.isLoading = true;
    const {admin, hhh: accessToken, errors} = await loginCall(this.client, {email, password})
    
    if (admin && accessToken) {
      this.isLogedin = true;
      this.admin = admin;
      localStorage.setItem('session', accessToken)
    } else if (errors) {
      const e = errors.map(({code, field}: any) => `${code}_${field}`);
      handleError(e);
    }
    this.isLoading = false;
  };

  @action
  async restoreSession() {
    this.isLoading = true;

    const {admin} = await meCall(this.client);

    if (admin) {
      this.admin = admin;
      this.isLogedin = true;
    }
    this.isLoading = false;
  }

  @action
  logginIn() {
    this.isLogedin = true;
  }
}
