import { useSelector } from "react-redux"
import { RootState } from "../store"
import UserCabinet from "../pages/UserCabinet"
import { createElement, useEffect, useState } from "react"
import AdminCabinet from "../pages/AdminCabinet"
import CourierCabinet from "../pages/CourierCabinet"

export const useCabinet: (name: string) => React.ReactNode = (name) => {
  const user = useSelector((state: RootState) => state.auth.user)
  const [cabinet, setCabinet] = useState<React.ReactNode>(
    createElement(UserCabinet)
  )

  useEffect(() => {
    setCabinet(() => {
      if (user?.role === "User") {
        return createElement(UserCabinet, { name })
      } else if (user?.role === "Admin") {
        return createElement(AdminCabinet, { name })
      } else if (user?.role === "Courier") {
        return createElement(CourierCabinet, { name })
      }
    })
  }, [user.role])
  return cabinet
}
