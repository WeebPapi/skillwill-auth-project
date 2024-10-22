import React from "react"
import { ICabinet } from "../interfaces/cabinet.interface"

const CourierCabinet: React.FC<ICabinet> = ({ name }) => {
  return <div>Welcome to Courier Cabinet, {name}</div>
}

export default CourierCabinet
