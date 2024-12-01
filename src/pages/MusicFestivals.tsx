import { MusicFestivalsList } from "@/components"
import { useFestivals } from "@/hooks"
import { getBandRecordLabelMap } from "@/utils"

export const MusicFestivals = () => {
  const { data, isPending, isError } = useFestivals()
  if (isPending) {
    return <div className="text-center">Loading...</div>
  }
  if (isError) {
    return <div className="text-center">Error loading music festivals data</div>
  }
  if (!data) {
    return <div className="text-center">No data available. Please refresh the page and try again!</div>
  }

  const organizedData = getBandRecordLabelMap(data)
  return <MusicFestivalsList recordLabelBandInfo={organizedData} />
}
