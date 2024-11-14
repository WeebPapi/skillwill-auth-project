import { UserObject } from "../interfaces/userobject.interface"

export const chunkArray = (
  array: UserObject[],
  size: number = 10
): UserObject[][] => {
  const result: UserObject[][] = []

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size)

    result.push(chunk)
  }
  return result
}
