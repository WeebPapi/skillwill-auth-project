import { useQuery } from "@tanstack/react-query"
import { getUser } from "../../api/getUser"
import { UserObject } from "../../interfaces/userobject.interface"

export const useGetUser = (id: string) => {
  return useQuery<UserObject>({
    queryFn: () => getUser(id),
    queryKey: ["getUser"],
  })
}
