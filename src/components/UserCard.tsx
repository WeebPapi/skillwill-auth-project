import React from "react"
import { UserObject } from "../interfaces/userobject.interface"
import { Box, Typography } from "@mui/material"
import CourierAddTask from "./CourierAddTask"

export const userContext = React.createContext({ id: "" })
const UserCard: React.FC<UserObject> = ({ name, surname, phone, role, id }) => {
  return (
    <Box
      sx={{
        border: "2px solid black",
        padding: "1.2rem 2rem",
        width: "max-content",
        height: 190,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      <Typography variant="body1" fontWeight={700} fontSize={28}>{`${name} ${
        surname ? surname : ""
      }`}</Typography>
      <Typography variant="body2" fontWeight={500} fontSize={20} color="gray">
        {role}
      </Typography>
      <Typography variant="body2" fontSize={14} sx={{ width: "max-content" }}>
        Phone Number: {phone}
      </Typography>
      {role === "Courier" ? (
        <userContext.Provider value={{ id }}>
          <CourierAddTask />
        </userContext.Provider>
      ) : null}
    </Box>
  )
}

export default UserCard
