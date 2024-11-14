import React, { useState } from "react"
import { Button, TextField } from "@mui/material"
import { TextFieldProps } from "../interfaces/textfield.interface"
import { IFormData } from "../interfaces/formdata.interface"
import DynamicWorkingDays from "./DynamicWorkingDays"
import { WorkingDay } from "../interfaces/workingday.interface"

interface DynamicFormComponentProps {
  fields: TextFieldProps[]
  onSubmit: (formData: IFormData) => void
}

const FormComponent: React.FC<DynamicFormComponentProps> = ({
  fields,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<IFormData>({})

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(formData)
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
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        )
      })}
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default FormComponent
