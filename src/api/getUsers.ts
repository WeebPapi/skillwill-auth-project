import { api } from "."
import { getUsersReturn } from "../interfaces/getusersreturn.interface"
import { UserObject } from "../interfaces/userobject.interface"

export const getUsers = async () => {
  const response = await api.get("/users")
  const unsanitizedData: getUsersReturn[] = response.data.items.filter(
    (item: getUsersReturn) => item.role !== "Admin"
  )
  const userData: UserObject[] = unsanitizedData.map((item) => ({
    name: item.name,
    surname: item.surname,
    phone: item.phone,
    role: item.role,
    id: item.id,
  }))
  return userData
}
