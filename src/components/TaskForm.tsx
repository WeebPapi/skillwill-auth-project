import React, { useContext, useEffect, useState } from "react"
import FormComponent from "./FormComponent"
import { TextFieldProps } from "../interfaces/textfield.interface"
import { useAddTask } from "../react-query/mutations/useAddTask"
import { userContext } from "./UserCard"
import { useGetUser } from "../react-query/query/useGetUser"
import { ITask } from "../interfaces/task.interface"

const inputFields: TextFieldProps[] = [
  {
    label: "Task Name",
    name: "taskName",
    type: "text",
    required: true,
  },
  {
    label: "Task Description",
    name: "taskDescription",
    type: "text",
    required: true,
  },
  {
    label: "Deadline",
    name: "deadline",
    type: "datetime-local",
    required: true,
  },
  {
    label: "Importance",
    name: "importance",
    type: "text",
    required: true,
  },
]

const TaskForm: React.FC = () => {
  const addTaskMutation = useAddTask()
  const { id } = useContext(userContext)
  const user = useGetUser(id)
  const [tasks, setTasks] = useState(user.data?.tasks)
  useEffect(() => {
    setTasks(user.data?.tasks)
  }, [user.data])
  return (
    <FormComponent
      tasks={tasks as ITask[]}
      fields={inputFields}
      onSubmit={addTaskMutation.mutate}
    />
  )
}

export default TaskForm
