import { api } from "."
import { IFormData } from "../interfaces/formdata.interface"

export const addTask = async (formdata: IFormData) => {
  console.log(formdata)
  const response = await api.put("/users", [formdata])
  return response.data
}
