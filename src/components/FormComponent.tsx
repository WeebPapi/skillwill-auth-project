import React, { useState } from "react"
import { Button, TextField } from "@mui/material"
import { TextFieldProps } from "../interfaces/textfield.interface"
import { IFormData } from "../interfaces/formdata.interface"
import DynamicWorkingDays from "./DynamicWorkingDays"
import { WorkingDay } from "../interfaces/workingday.interface"
import { userContext } from "./UserCard"
import { useContext } from "react"
import { ITask } from "../interfaces/task.interface"
interface DynamicFormComponentProps {
  fields: TextFieldProps[]
  onSubmit: (formData: IFormData) => void
  tasks: ITask[]
}

const FormComponent: React.FC<DynamicFormComponentProps> = ({
  fields,
  onSubmit,
  tasks,
}) => {
  const { id } = useContext(userContext)
  const [formData, setFormData] = useState<IFormData>({ _uuid: id, tasks: [] })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const task: ITask = {
      taskName: (formData.taskName as string) || "",
      taskDesc: (formData.taskDescription as string) || "",
      deadline: (formData.deadline as string) || "",
      importance: (formData.importance as string) || "",
    }
    onSubmit({ ...formData, tasks: [...tasks, task] })
  }

  const handleChange = (name: string, value: string | File | WorkingDay[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => {
        if (field.isDynamic) {
          return (
            <DynamicWorkingDays
              key={field.name}
              options={field.options || []}
              onChange={(value) =>
                handleChange(field.name, value as WorkingDay[])
              }
            />
          )
        }
        return (
          <TextField
            key={field.name}
            {...field}
            value={formData[field.name] || ""}
            onChange={(e) => {
              handleChange(field.name, e.target.value)
            }}
          />
        )
      })}
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default FormComponent
