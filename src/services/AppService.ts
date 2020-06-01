import { observable, action } from "mobx";
import { FetchQl } from "../lib/client";
import recordPaymentCall, {
  IRecordPayment,
} from "../data/graphql/recordPayment";
import loginCall from '../data/graphql/login';
import {IAdmin} from '../data/models/Admin';
import meCall from '../data/graphql/me';
import createDriverCall from '../data/graphql/createDriver';
import { ICreateDriver } from '../data/models/Driver';
import fetchPaymentsCall from '../data/graphql/fetchPayments';
import fetchDriverCall from '../data/graphql/fetchDriver';
import fetchDefaultersCall from '../data/graphql/fetchDefaulters';
import fetchDriversCall from '../data/graphql/fetchDrivers';

export default class AppService {
  client: FetchQl;
  @observable isLogedin: boolean = false;
  @observable isLoading: boolean = false;
  admin: IAdmin | null = null;
  errors = observable.array<string>([]);

  constructor(client: FetchQl) {
    this.client = client;
  }

  recordPayment = async (
    data: IRecordPayment,
    handleError: (errors: string[]) => void
  ) => {
    this.isLoading = true;
    const { payment, errors } = await recordPaymentCall(this.client, data);

    this.isLoading = false;
    if (payment) {
      return payment;
    } else if (errors) {
      handleError(errors);
    }
  };

  @action
  async login(
    { email, password }: { email: string; password: string },
    handleError: (errors: string[]) => void
  ) {
    this.isLoading = true;
    const { admin, hhh: accessToken, errors } = await loginCall(this.client, {
      email,
      password,
    });

    if (admin && accessToken) {
      this.isLogedin = true;
      this.admin = admin;
      localStorage.setItem("session", accessToken);
    } else if (errors) {
      handleError(errors.map(({ code, field }: any) => `${code}_${field}`));
    }
    this.isLoading = false;
  }

  @action
  async restoreSession() {
    if (this.admin) {
      return;
    }

    this.isLoading = true;

    const { admin } = await meCall(this.client);

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

  @action
  async createDriver(
    data: ICreateDriver,
    handleError: (errors: string[]) => void
  ) {
    this.isLoading = true;
    const { driver, errors } = await createDriverCall(this.client, data);
    console.log({ driver, errors });
    this.isLoading = false;

    if (driver) {
      return driver;
    } else {
      handleError(errors.map(({ code, field }: any) => `${code}_${field}`));
    }
  }

  @action
  async fetchPayments() {
    this.isLoading = true;
    const payments = await fetchPaymentsCall(this.client);
    this.isLoading = false;

    return payments;
  }

  @action
  async fetchDriver(driverId: number) {
    this.isLoading = true;
    const driver = await fetchDriverCall(this.client, driverId)
    this.isLoading = false;

    return driver;
  }

  @action
  async fetchDefaulters(){
    this.isLoading = true;
    const defaulters = await fetchDefaultersCall(this.client);
    this.isLoading = false;

    return defaulters;
  }

  @action
  async fetchDrivers(){
    this.isLoading = true;
    const drivers = await fetchDriversCall(this.client);
    this.isLoading = false;

    return drivers;
  }
}
