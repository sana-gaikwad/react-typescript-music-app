import { Festival, RecordLabelBandsInfo } from "@/types"

/**
 * Sorts strings alphabetically in a case-insensitive manner
 * @param a First string to compare
 * @param b Second string to compare
 * @returns Number indicating sort order
 */
const sortAlphabetically = (a: string, b: string): number => a.toLowerCase().localeCompare(b.toLowerCase())

/**
 * Sorts festival names alphabetically within a band entry
 * @param bandEntry Band entry containing festival names to sort
 * @returns Band entry with sorted festival names
 */
const sortFestivalNames = (bandEntry: { bandName: string; festivalNames: string[] }) => {
  bandEntry.festivalNames.sort(sortAlphabetically)
  return bandEntry
}

/**
 * Sorts bands alphabetically within a record label entry
 * @param recordLabel Record label entry containing bands to sort
 * @returns Record label entry with sorted bands
 */
const sortBands = (recordLabel: RecordLabelBandsInfo): RecordLabelBandsInfo => {
  recordLabel.bands.sort((a, b) => sortAlphabetically(a.bandName, b.bandName))
  recordLabel.bands = recordLabel.bands.map(sortFestivalNames)
  return recordLabel
}

/**
 * Organizes the given festivals into a list of record labels and their bands.
 * Each record label is an object with a "recordLabel" property and a "bands" property.
 * The "bands" property is an array of objects, each with a "bandName" property and a "festivalNames" property.
 * The "festivalNames" property is an array of strings representing the festival names
 * that the band has played at.
 *
 * All entries are sorted alphabetically:
 * - Record labels are sorted by name
 * - Bands are sorted by name within each record label
 * - Festival names are sorted alphabetically within each band
 *
 * @param {Festival[]} festivals The festivals to organize.
 * @returns {RecordLabelBandsInfo[]} The organized  and sorted list of record labels and bands.
 */
export const getBandRecordLabelMap = (festivals: Festival[]): RecordLabelBandsInfo[] => {
  // Initialize an empty array to store the final result
  const recordLabelBandMap: RecordLabelBandsInfo[] = []

  festivals.forEach((festival) => {
    const { name: festivalName, bands } = festival

    bands.forEach((band) => {
      const { name: bandName, recordLabel } = band

      // Skip bands without a record label
      if (!recordLabel) return

      // Normalize record label for case-insensitive comparison
      const normalizedRecordLabel = recordLabel.toLowerCase()

      // Find the record label object in the array or create a new one
      let recordLabelMap = recordLabelBandMap.find((map) => map.recordLabel.toLowerCase() === normalizedRecordLabel)

      if (!recordLabelMap) {
        // If no record label object exists, create one and push it to the array
        recordLabelMap = {
          recordLabel,
          bands: [],
        }
        recordLabelBandMap.push(recordLabelMap)
      }

      // Find the band under the record label or create a new entry
      let bandEntry = recordLabelMap.bands.find(
        (bandEntry) => bandEntry.bandName.toLowerCase() === bandName.toLowerCase(),
      )

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

  // Sort the entire structure alphabetically
  return recordLabelBandMap.sort((a, b) => sortAlphabetically(a.recordLabel, b.recordLabel)).map(sortBands)
}
