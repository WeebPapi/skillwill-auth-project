import React from "react"
import { ICabinet } from "../interfaces/cabinet.interface"

const UserCabinet: React.FC<ICabinet> = ({ name }) => {
  return <div>Welcome to User Cabinet, {name}</div>
}

export default UserCabinet
