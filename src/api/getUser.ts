import { api } from "."
import { getUsersReturn } from "../interfaces/getusersreturn.interface"
import { UserObject } from "../interfaces/userobject.interface"

export const getUser = async (id: string) => {
  const response = await api.get(`/users/${id}`)
  const item: getUsersReturn = response.data
  const userData: UserObject = {
    name: item.name,
    surname: item.surname,
    phone: item.phone,
    role: item.role,
    id: item._uuid,
    tasks: item.tasks ? item.tasks : undefined,
  }
  return userData
}
