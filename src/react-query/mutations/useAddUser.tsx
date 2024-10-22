import { useMutation } from "@tanstack/react-query"
import { addUser } from "../../api/addUser"
import { IFormData } from "../../interfaces/formdata.interface"

export const useAddUser = () => {
  return useMutation({
    mutationFn: (user: IFormData) => addUser([user]),
  })
}
