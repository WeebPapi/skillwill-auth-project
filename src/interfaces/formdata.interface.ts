import { WorkingDay } from "./workingday.interface"

export interface IFormData {
  [key: string]:
    | string
    | File
    | {
        [key: string]: string | number
      }
    | Array<{
        day: string
        startTime: string
        endTime: string
      }>
    | WorkingDay[]
    | undefined
  workingDays?: WorkingDay[]
}
