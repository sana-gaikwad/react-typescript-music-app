import { Festival, RecordLabelBandsInfo } from "../types"

export const bandRecordLabelMap = (festivals: Festival[]): RecordLabelBandsInfo[] => {
  // Initialize an empty array to store the final result
  const recordLabelBandMap: RecordLabelBandsInfo[] = []

  festivals.forEach((festival) => {
    const { name: festivalName, bands } = festival

    bands.forEach((band) => {
      const { name: bandName, recordLabel } = band

      // Skip bands without a record label
      if (!recordLabel) return

      // Find the record label object in the array or create a new one
      let recordLabelMap = recordLabelBandMap.find((map) => map.recordLabel === recordLabel)

      if (!recordLabelMap) {
        // If no record label object exists, create one and push it to the array
        recordLabelMap = {
          recordLabel,
          bands: [],
        }
        recordLabelBandMap.push(recordLabelMap)
      }

      // Find the band under the record label or create a new entry
      let bandEntry = recordLabelMap.bands.find((bandEntry) => bandEntry.bandName === bandName)

      if (!bandEntry) {
        bandEntry = { bandName, festivalNames: [] }
        recordLabelMap.bands.push(bandEntry)
      }

      // Add the festival name to the band's festivalNames array (if not already added)
      if (!bandEntry.festivalNames.includes(festivalName)) {
        bandEntry.festivalNames.push(festivalName)
      }
    })
  })

  return recordLabelBandMap
}
