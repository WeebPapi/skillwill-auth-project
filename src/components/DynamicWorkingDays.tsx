import React, { useState } from "react"
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import DeleteIcon from "@mui/icons-material/Delete"

interface WorkingDay {
  day: string
  startTime: string
  endTime: string
}

interface DynamicWorkingDaysProps {
  options: { value: string; label: string }[]
  onChange: (workingDays: WorkingDay[]) => void
}

const DynamicWorkingDays: React.FC<DynamicWorkingDaysProps> = ({
  options,
  onChange,
}) => {
  const [workingDays, setWorkingDays] = useState<WorkingDay[]>([
    { day: "", startTime: "", endTime: "" },
  ])

  const handleAddDay = () => {
    setWorkingDays([...workingDays, { day: "", startTime: "", endTime: "" }])
  }

  const handleRemoveDay = (index: number) => {
    const newWorkingDays = workingDays.filter((_, i) => i !== index)
    setWorkingDays(newWorkingDays)
    onChange(newWorkingDays)
  }

  const handleChange = (
    index: number,
    field: keyof WorkingDay,
    value: string
  ) => {
    const newWorkingDays = workingDays.map((day, i) => {
      if (i === index) {
        return { ...day, [field]: value }
      }
      return day
    })
    setWorkingDays(newWorkingDays)
    onChange(newWorkingDays)
  }

  const timeOptions = Array.from({ length: 24 }, (_, i) => ({
    value: `${i.toString().padStart(2, "0")}:00`,
    label: `${i.toString().padStart(2, "0")}:00`,
  }))

  return (
    <Box>
      {workingDays.map((day, index) => (
        <Box key={index} sx={{ display: "flex", gap: 2, mb: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Day</InputLabel>
            <Select
              value={day.day}
              onChange={(e) => handleChange(index, "day", e.target.value)}
              label="Day"
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Start Time</InputLabel>
            <Select
              value={day.startTime}
              onChange={(e) => handleChange(index, "startTime", e.target.value)}
              label="Start Time"
            >
              {timeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>End Time</InputLabel>
            <Select
              value={day.endTime}
              onChange={(e) => handleChange(index, "endTime", e.target.value)}
              label="End Time"
            >
              {timeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button onClick={() => handleRemoveDay(index)}>
            <DeleteIcon />
          </Button>
        </Box>
      ))}
      <Button onClick={handleAddDay} startIcon={<AddIcon />}>
        Add Working Day
      </Button>
    </Box>
  )
}

export default DynamicWorkingDays
