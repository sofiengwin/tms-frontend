import { IAdmin } from "./Admin";
import { ICreateDriver } from "./Driver";

export interface IPayment {
  amount: string;
  cashier: IAdmin;
  driver: ICreateDriver;
  createdAt: string;
}