import { useQuery } from "@tanstack/react-query"
import { fetchFestivals } from "../api/festivals"

export const useFestivals = () => {
  const { isPending, isError, data } = useQuery({
    queryKey: ["festivals"],
    queryFn: fetchFestivals,
  })
  return {
    isPending,
    isError,
    data,
  }
}
