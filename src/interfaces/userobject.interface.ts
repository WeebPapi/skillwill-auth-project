import { ITask } from "./task.interface"

export interface UserObject {
  name: string
  surname: string
  role: "Admin" | "User" | "Courier"
  phone: string
  id: string
  tasks?: ITask[]
}
