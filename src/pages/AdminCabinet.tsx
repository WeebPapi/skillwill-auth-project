import React from "react"
import { ICabinet } from "../interfaces/cabinet.interface"

const AdminCabinet: React.FC<ICabinet> = ({ name }) => {
  return <div>Welcome to Admin Cabinet, {name}</div>
}

export default AdminCabinet
