import React, { useState, useEffect } from "react"
import { Button, TextField } from "@mui/material"
import { TextFieldProps } from "../interfaces/textfield.interface"
import { IFormData } from "../interfaces/formdata.interface"
import DynamicWorkingDays from "./DynamicWorkingDays"
import { WorkingDay } from "../interfaces/workingday.interface"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../store"
import { setUser } from "../store/auth.slice"

interface DynamicFormProps {
  fields: TextFieldProps[]
  onSubmit: (formData: IFormData) => void
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState<IFormData>({})
  const [isValid, setIsValid] = useState(!(user.role === "Courier"))
  const navigate = useNavigate()
  useEffect(() => {
    if (user.role === "Courier") {
      const workingDaysCount = formData.workingDays?.length || 0
      setIsValid(workingDaysCount >= 5)
    }
  }, [formData.workingDays, user.role])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isValid) {
      onSubmit(formData)
      dispatch(setUser({ ...user, name: formData.name }))
      navigate("/profile")
    } else {
      alert("Please select at least 5 working days before submitting.")
    }
  }

  const handleChange = (name: string, value: string | File | WorkingDay[]) => {
    setFormData((prev) => ({ ...prev, role: user.role, [name]: value }))
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

export default DynamicForm
