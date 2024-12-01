import { Music } from "lucide-react"
import { RecordLabelCard } from "./RecordLabelCard"
import { RecordLabelBandsInfo } from "@/types"

interface MusicFestivalsListProps {
  recordLabelBandInfo: RecordLabelBandsInfo[]
}

export const MusicFestivalsList = ({ recordLabelBandInfo }: MusicFestivalsListProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      {recordLabelBandInfo.map((record) => (
        <RecordLabelCard key={record.recordLabel} header={record.recordLabel}>
          {record.bands.map((band) => (
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-l-4 border-purple-400 pl-3">
                <Music className="h-5 w-5 text-purple-500" />
                <h3 className="text-lg font-semibold text-gray-800">{band.bandName}</h3>
              </div>
              <ul className="ml-10 space-y-1">
                {band.festivalNames.map((festival, index) => (
                  <li
                    key={index}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 cursor-default"
                  >
                    {festival}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RecordLabelCard>
      ))}
    </div>
  )
}
