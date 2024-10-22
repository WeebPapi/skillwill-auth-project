import axios from "axios"

export const api = axios.create({
  baseURL: "https://crudapi.co.uk/api/v1/",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
  },
})
