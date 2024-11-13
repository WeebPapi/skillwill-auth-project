export interface getUsersReturn {
  _created: number
  _data_type: string
  _is_deleted: boolean
  _modified: number
  _self_link: string
  _user: string
  _uuid: string
  email: string
  id: string
  name: string
  password: string
  phone: string
  role: "Admin" | "User" | "Courier"
  surname: string
}
