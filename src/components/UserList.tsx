import React, { useEffect } from "react"
import { UserObject } from "../interfaces/userobject.interface"
import { Box, Button } from "@mui/material"
import UserCard from "./UserCard"
import { chunkArray } from "../api/chunkArray"
import { nanoid } from "@reduxjs/toolkit"

interface UserListProps {
  list: UserObject[]
}

const itemsPerPage = 10

const UserList: React.FC<UserListProps> = ({ list }) => {
  const [numPages, setNumpages] = React.useState(
    Math.ceil(list.length / itemsPerPage)
  )
  const [currentPage, setCurrentPage] = React.useState(0)
  const [splitList, setSplitList] = React.useState(
    chunkArray(list, itemsPerPage)
  )
  const [displayPagination, setDisplayPagination] = React.useState(false)
  useEffect(() => {
    setSplitList(chunkArray(list, itemsPerPage))
  }, [list])
  useEffect(() => {
    if (numPages > 1) setDisplayPagination(true)
    else if (numPages === 1) setDisplayPagination(false)
  }, [numPages])
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1.5rem",
      }}
    >
      {splitList[currentPage]?.map((user) => (
        <UserCard
          key={user.id + nanoid()}
          id={user.id}
          name={user.name}
          surname={user.surname}
          phone={user.phone}
          role={user.role}
        />
      ))}
      {displayPagination ? (
        <>
          <Button
            onClick={() => {
              if (currentPage + 1 <= splitList.length - 1)
                setCurrentPage((prev) => prev + 1)
            }}
          >
            +
          </Button>
          <Button
            onClick={() => {
              if (currentPage !== 0) setCurrentPage((prev) => prev - 1)
            }}
          >
            -
          </Button>
        </>
      ) : null}
    </Box>
  )
}

export default UserList
