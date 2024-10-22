import { api } from "."
import { IFormData } from "../interfaces/formdata.interface"

export const addUser = async (user: IFormData[]) => {
  const response = await api.post("/users", user)
  return response.data
}
