import { TextFieldProps } from "./interfaces/textfield.interface"

export const adminInputFields: TextFieldProps[] = [
  { label: "Name", name: "name", type: "text", required: true },
  { label: "Surname", name: "surname", type: "text", required: false },
  { label: "Email", name: "email", type: "email", required: true },
  { label: "Password", name: "password", type: "password", required: true },
  { label: "Phone", name: "phone", type: "tel", required: true },
  { label: "Id", name: "id", type: "text", required: true },
  {
    label: "Profile Image",
    name: "profileImage",
    type: "file",
    required: false,
  },
]
export const userInputFields: TextFieldProps[] = [
  { label: "Name", name: "name", type: "text", required: true },
  { label: "Surname", name: "surname", type: "text", required: false },
  { label: "Email", name: "email", type: "email", required: true },
  { label: "Password", name: "password", type: "password", required: true },
  { label: "Phone", name: "phone", type: "tel", required: true },
  { label: "Id", name: "id", type: "text", required: true },
  {
    label: "Profile Image",
    name: "profileImage",
    type: "file",
    required: false,
  },
  { label: "Longitude", name: "longitude", type: "text", required: true },
  { label: "Latitude", name: "latitude", type: "text", required: true },
]
export const courierInputFields: TextFieldProps[] = [
  { label: "Name", name: "name", type: "text", required: true },
  { label: "Surname", name: "surname", type: "text", required: false },
  { label: "Email", name: "email", type: "email", required: true },
  { label: "Password", name: "password", type: "password", required: true },
  { label: "Phone", name: "phone", type: "tel", required: true },
  { label: "Id", name: "id", type: "text", required: true },
  {
    label: "Profile Image",
    name: "profileImage",
    type: "file",
    required: false,
  },
  { label: "Vehicle", name: "vehicle", type: "text", required: true },
  {
    label: "Working Days",
    name: "workingDays",
    type: "dynamic",
    required: true,
    isDynamic: true,
    options: [
      { value: "monday", label: "Monday" },
      { value: "tuesday", label: "Tuesday" },
      { value: "wednesday", label: "Wednesday" },
      { value: "thursday", label: "Thursday" },
      { value: "friday", label: "Friday" },
      { value: "saturday", label: "Saturday" },
      { value: "sunday", label: "Sunday" },
    ],
  },
]
