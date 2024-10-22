import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { RootState } from "../store"

const ProtectedRoute: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth.user)
  if (!auth) return <Navigate to="/auth" />
  return <Outlet />
}

export default ProtectedRoute
