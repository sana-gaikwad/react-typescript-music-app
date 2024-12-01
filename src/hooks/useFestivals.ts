import { fetchFestivals } from "@/api/festivals"
import { useQuery } from "@tanstack/react-query"

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
