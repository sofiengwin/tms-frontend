export interface ICreateDriver {
  name: string;
  phoneNumber: string;
  motNumber: string;
  address: string;
  state: string;
  hometown: string;
  areaOfOperation: string;
  qrCode?: string;
}

export const driverFields = `
  name
  phoneNumber
  motNumber
  address
  state
  hometown
  areaOfOperation
  qrCode
`