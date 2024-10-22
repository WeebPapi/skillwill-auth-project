import { useEffect, useState } from "react"
import { TextFieldProps } from "../interfaces/textfield.interface"
import {
  adminInputFields,
  courierInputFields,
  userInputFields,
} from "../inputfields"

export const useFields = (status: "User" | "Admin" | "Courier") => {
  const [fields, setFields] = useState<TextFieldProps[]>(userInputFields)
  useEffect(() => {
    if (status === "User") {
      setFields(userInputFields)
    } else if (status === "Admin") {
      setFields(adminInputFields)
    } else if (status === "Courier") {
      setFields(courierInputFields)
    }
  }, [status])
  return fields
}
