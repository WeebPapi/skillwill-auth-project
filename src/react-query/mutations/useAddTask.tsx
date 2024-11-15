import { useMutation } from "@tanstack/react-query"
import { addTask } from "../../api/addTask"
import { IFormData } from "../../interfaces/formdata.interface"

export const useAddTask = () => {
  return useMutation({
    mutationFn: (task: IFormData) => addTask(task),
  })
}
