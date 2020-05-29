const errorMessages = {
  driver_blank: 'This QR code is invalid. Driver not found',
  admin_notAuthorized: 'Unathourised!. Please login'

}

export default function (errors: Dict<string>[]) {
  return errors.map(({code, field}) => (errorMessages as any)[`${field}_${code}`])
}