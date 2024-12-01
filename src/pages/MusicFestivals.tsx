import { MusicFestivalsList } from "../components/MusicFestivalList"
import { useFestivals } from "../hooks/useFestivals"
import { bandRecordLabelMap } from "../utils/getBandRecordLabelInfo"

export const MusicFestivals = () => {
  const { data, isPending, isError } = useFestivals()
  if (isPending) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error loading music festivals data</div>
  }
  if (!data) {
    return <div>No data available. Try again!</div>
  }

  const organizedData = bandRecordLabelMap(data)
  return (
    <div>
      <MusicFestivalsList recordLabelBandInfo={organizedData} />
    </div>
  )
}
