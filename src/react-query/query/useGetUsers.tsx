import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../api/getUsers"
import { UserObject } from "../../interfaces/userobject.interface"

export const useGetUsers = () => {
  return useQuery<UserObject[]>({
    queryFn: () => getUsers(),
    queryKey: ["getUsers"],
  })
}
