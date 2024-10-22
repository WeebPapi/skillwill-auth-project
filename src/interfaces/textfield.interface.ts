export interface TextFieldProps {
  label: string
  name: string
  type: string
  required: boolean
  multiple?: boolean
  options?: { value: string; label: string }[]
  isDynamic?: boolean
}
