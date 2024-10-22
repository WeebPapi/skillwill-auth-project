import { useDispatch } from "react-redux"
import { authReducer } from "./auth.slice"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch<AppDispatch>
