import { Festival } from "../types"

const FESTIVALS_API_BASE_URL = "/api/festivals"

export const fetchFestivals = async (): Promise<Festival[]> => {
  const response = await fetch(FESTIVALS_API_BASE_URL)
  return response.json()
}
