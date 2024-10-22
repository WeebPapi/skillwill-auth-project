import { createElement } from "react"
import { createBrowserRouter } from "react-router-dom"
import ProtectedRoute from "../layouts/ProtectedRoute"
import CabinetPage from "../pages/CabinetPage"
import AuthPage from "../pages/AuthPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(ProtectedRoute),
    children: [
      {
        path: "/profile",
        element: createElement(CabinetPage),
      },
    ],
  },
  {
    path: "/auth",
    element: createElement(AuthPage),
  },
])
