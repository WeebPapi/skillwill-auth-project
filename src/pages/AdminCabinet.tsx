import React, { useEffect } from "react"
import { ICabinet } from "../interfaces/cabinet.interface"
import { Box, Button, Typography } from "@mui/material"
import UserList from "../components/UserList"
import { useGetUsers } from "../react-query/query/useGetUsers"

const AdminCabinet: React.FC<ICabinet> = ({ name }) => {
  const { data, isLoading, error } = useGetUsers()
  const [filter, setFilter] = React.useState<null | "User" | "Courier">(null)
  const [filteredData, setFilteredData] = React.useState(
    data?.filter((item) => item.role === filter)
  )
  useEffect(() => {
    setFilteredData(data?.filter((item) => item.role === filter))
  }, [filter])
  if (error) return <Typography variant="h1">Error Occurred</Typography>
  return (
    <Box>
      <Box>
        <Typography variant="h2" fontSize={32}>
          Select a filter
        </Typography>
        <Button
          onClick={() => {
            setFilter("Courier")
          }}
        >
          Couriers
        </Button>
        <Button onClick={() => setFilter("User")}>Users</Button>
        <Button onClick={() => setFilter(null)}>Remove Filter</Button>
      </Box>
      <Typography variant="h1">Welcome to Admin Cabinet, {name}</Typography>
      {!data || isLoading ? (
        <Typography variant="h2">...Loading</Typography>
      ) : (
        <UserList
          list={filter && filteredData ? filteredData : data}
        ></UserList>
      )}
    </Box>
  )
}

export default AdminCabinet
