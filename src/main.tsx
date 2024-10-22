import { createRoot } from "react-dom/client"
import { router } from "./router/router"
import { client } from "./react-query"
import { RouterProvider } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { store } from "./store"
import { Provider } from "react-redux"

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </QueryClientProvider>
)
