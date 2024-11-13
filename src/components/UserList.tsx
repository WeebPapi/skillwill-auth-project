import React from "react"
import { UserObject } from "../interfaces/userobject.interface"
import { Box } from "@mui/material"
import UserCard from "./UserCard"

interface UserListProps {
  list: UserObject[]
}

const UserList: React.FC<UserListProps> = ({ list }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {list.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          surname={user.surname}
          phone={user.phone}
          role={user.role}
        />
      ))}
    </Box>
  )
}

export default UserList
