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
import fetchPaymentStatsCall from '../data/graphql/fetchPaymentStats';

export default class AppService {
  client: FetchQl;
  @observable isLogedin: boolean = false;
  @observable isLoading: boolean = false;
  errorHandler!: (error: AppErrorType) => void;
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
    try {
      const { payment, errors } = await recordPaymentCall(this.client, data);
      
      this.isLoading = false;
      
      if (payment) {
        return payment;
      } else if (errors) {
        handleError(errors);
      }
    } catch (error) {
      this.isLoading = false;
      this.errorHandler(error.message);
    }
      

  };

  @action
  async login(
    { email, password }: { email: string; password: string },
    handleError: (errors: string[]) => void
  ) {
    this.isLoading = true;
   try {
    const { admin, hhh: accessToken, errors } = await loginCall(this.client, {
      email,
      password,
    });

    if (admin && accessToken) {
      this.isLogedin = true;
      this.admin = admin;
      localStorage.setItem("session", accessToken);
      localStorage.setItem('admin', JSON.stringify(admin))
    } else if (errors) {
      handleError(errors.map(({ code, field }: any) => `${code}_${field}`));
    }
    this.isLoading = false;
   } catch (error) {
     this.isLoading = false;
     this.errorHandler(error.message)
   }
  }

  @action
  async restoreSession() {
    if (this.admin) {
      return;
    }
    const adminString = localStorage.getItem('admin');
    if (adminString) {
      this.admin = JSON.parse(adminString)
      this.logginIn();
      console.log({adminString}, JSON.parse(adminString))
    }
    console.log(this.admin)
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
    try {
      const { driver, errors } = await createDriverCall(this.client, data);
      console.log({ driver, errors });
      this.isLoading = false;
  
      if (driver) {
        return driver;
      } else {
        handleError(errors.map(({ code, field }: any) => `${code}_${field}`));
      }
    } catch (error) {
      this.isLoading = false;
      this.errorHandler(error.message);
    }
  }

  @action
  async fetchPayments() {
    this.isLoading = true;
    
    try {
      const payments = await fetchPaymentsCall(this.client);
      this.isLoading = false;
  
      return payments;
    } catch (error) {
      this.isLoading = false;
      this.errorHandler(error.message)
    }
  }

  @action
  async fetchDriver(driverId: number) {
    this.isLoading = true;
    
    try {
      const driver = await fetchDriverCall(this.client, driverId)
      this.isLoading = false;
  
      return driver;
    } catch (error) {
      this.isLoading = false;
      this.errorHandler(error.message)
    }
  }

  @action
  async fetchDefaulters(){
    this.isLoading = true;
    
    try {
      const defaulters = await fetchDefaultersCall(this.client);
      this.isLoading = false;
      
      return defaulters;
    } catch (error) {
      this.isLoading = false;
      this.errorHandler(error.message)
    }
  }

  @action
  async fetchDrivers(){
    return await this.catch(async () => {
        const drivers = await fetchDriversCall(this.client);
        
        this.isLoading = false;
        return drivers;
    })
  }

  @action
  async fetchPaymentStats(cashierId?: string){
    return await this.catch(async () => {
        const paymentStat = await fetchPaymentStatsCall(this.client, cashierId);
        
        this.isLoading = false;
        return paymentStat;
    })
  }

  addErrorHandler(errorHandler: (error: AppErrorType) => void) {
    this.errorHandler = errorHandler;
  }

  private async catch<T>(loader: () => Promise<T>) {
    console.log('catch')
    this.isLoading = true;
    try {
      console.log('waiting for request to be made')
      return await loader();
    } catch (error) {
      this.errorHandler(error.message);
      this.isLoading = false;
    }
  }
}
