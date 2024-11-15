import React from "react"
import { Box, Button } from "@mui/material"
import TaskForm from "./TaskForm"

const CourierAddTask: React.FC = () => {
  const [extended, setExtended] = React.useState(false)
  return (
    <Box sx={{ width: "100%", height: "max-content", padding: "1rem 1.5rem" }}>
      <Button
        onClick={() => {
          setExtended((prev) => !prev)
        }}
      >
        Task Creation
      </Button>
      {extended ? <TaskForm /> : null}
    </Box>
  )
}

export default CourierAddTask
