import { MusicFestivalsList } from "@/components"
import { useFestivals } from "@/hooks"
import { getBandRecordLabelMap } from "@/utils"

export const MusicFestivalsPage = () => {
  const { data, isPending, isError } = useFestivals()
  if (isPending) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error loading music festivals data</div>
  }
  if (!data) {
    return <div>No data available. Please refresh the page and try again!</div>
  }

  const organizedData = getBandRecordLabelMap(data)
  return <MusicFestivalsList recordLabelBandInfo={organizedData} />
}
