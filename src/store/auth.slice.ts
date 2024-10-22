import { createSlice } from "@reduxjs/toolkit"

const initialState: {
  user: {
    name: string
    role: "User" | "Admin" | "Courier"
  }
} = {
  user: {
    name: "",
    role: "User",
  },
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
    },
  },
})

export const authReducer = authSlice.reducer
export const { setUser } = authSlice.actions
