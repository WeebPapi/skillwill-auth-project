import React from "react"

import { useCabinet } from "../hooks/useCabinet"
import { RootState } from "../store"
import { useSelector } from "react-redux"

const CabinetPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  const cabinet = useCabinet(user.name)

  return cabinet
}

export default CabinetPage
