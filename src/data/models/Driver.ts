export interface ICreateDriver {
  id?: number;
  name: string;
  phoneNumber: string;
  motNumber: string;
  address: string;
  state: string;
  hometown: string;
  areaOfOperation: string;
  qrCode?: string;
  defaultedAt?: string;
}

export const driverFields = `
  id
  name
  phoneNumber
  motNumber
  address
  state
  hometown
  areaOfOperation
  qrCode
`;
