export interface Band {
  name: string
  recordLabel: string
}

export interface Festival {
  name: string
  bands: Band[]
}

export interface BandFestivalInfo {
  bandName: string
  festivalNames: string[]
}

export interface RecordLabelBandsInfo {
  recordLabel: string
  bands: BandFestivalInfo[]
}
