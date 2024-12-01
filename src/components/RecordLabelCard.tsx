import { Disc } from "lucide-react"
import { ReactNode } from "react"

interface RecordLabelCardProps {
  header: string
  children: ReactNode
}

export const RecordLabelCard = ({ header, children }: RecordLabelCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4">
        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <Disc className="h-6 w-6 text-purple-600" />
          {header}
        </h2>
      </div>
      <div className="p-6 space-y-6">{children}</div>
    </div>
  )
}
