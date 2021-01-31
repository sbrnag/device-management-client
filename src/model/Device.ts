export interface IDevice {
  _id?: string
  __v?: number
  id?: string
  device: string
  os: string
  manufacturer: string
  checkedOut_at?: string
  isCheckedOut?: boolean
  lastCheckedOutBy?: string
}

export const initialValues: IDevice = {
  id: '',
  device: '',
  os: '',
  manufacturer: '',
  checkedOut_at: '',
  isCheckedOut: false,
  lastCheckedOutBy: '',
}
