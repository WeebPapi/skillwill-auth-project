import React from "react"
import DynamicForm from "../components/DynamicForm"
import { Box, Button } from "@mui/material"
import { useFields } from "../hooks/useFields"
import { useAddUser } from "../react-query/mutations/useAddUser"
import { RootState, useAppDispatch } from "../store"
import { setUser } from "../store/auth.slice"
import { useSelector } from "react-redux"

const AuthPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useAppDispatch()
  const fields = useFields(user?.role)
  const addUserMutation = useAddUser()
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "max-content",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant="text"
          color="primary"
          onClick={() => dispatch(setUser({ role: "User" }))}
        >
          User
        </Button>
        <Button
          variant="text"
          color="primary"
          onClick={() => dispatch(setUser({ role: "Admin" }))}
        >
          Admin
        </Button>
        <Button
          variant="text"
          color="primary"
          onClick={() => dispatch(setUser({ role: "Courier" }))}
        >
          Courier
        </Button>
      </Box>
      <DynamicForm fields={fields} onSubmit={addUserMutation.mutate} />
    </>
  )
}

export default AuthPage
