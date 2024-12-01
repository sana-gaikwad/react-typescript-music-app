import { describe, it, expect } from "vitest"
import { Festival } from "../../types"
import { getBandRecordLabelMap } from "../../utils/getBandRecordLabelInfo"

describe("bandRecordLabelMap", () => {
  it("should correctly organize data by Record Label, Band and Festival", () => {
    const festivals: Festival[] = [
      {
        name: "Alpha Festival",
        bands: [
          { name: "Band A", recordLabel: "Record Label 1" },
          { name: "Band B", recordLabel: "Record Label 1" },
        ],
      },
      {
        name: "Beta Festival",
        bands: [{ name: "Band A", recordLabel: "Record Label 1" }],
      },
      {
        name: "Gamma Festival",
        bands: [{ name: "Band C", recordLabel: "Record Label 2" }],
      },
    ]
    const result = getBandRecordLabelMap(festivals)
    expect(result).toEqual([
      {
        recordLabel: "Record Label 1",
        bands: [
          {
            bandName: "Band A",
            festivalNames: ["Alpha Festival", "Beta Festival"],
          },
          {
            bandName: "Band B",
            festivalNames: ["Alpha Festival"],
          },
        ],
      },
      {
        recordLabel: "Record Label 2",
        bands: [
          {
            bandName: "Band C",
            festivalNames: ["Gamma Festival"],
          },
        ],
      },
    ])
  })
  it("should skip Bands without a Record Label", () => {
    const festivals: Festival[] = [
      {
        name: "Alpha Festival",
        bands: [
          { name: "Band A", recordLabel: "Record Label 1" },
          { name: "Band B", recordLabel: "Record Label 1" },
        ],
      },
      {
        name: "Beta Festival",
        bands: [{ name: "Band A", recordLabel: "" }],
      },
    ]
    const results = getBandRecordLabelMap(festivals)
    expect(results).toEqual([
      {
        recordLabel: "Record Label 1",
        bands: [
          {
            bandName: "Band A",
            festivalNames: ["Alpha Festival"],
          },
          {
            bandName: "Band B",
            festivalNames: ["Alpha Festival"],
          },
        ],
      },
    ])
  })
  it("should avoid adding duplicate festival names for the same band under the same label", () => {
    const festivals: Festival[] = [
      {
        name: "Alpha Festival",
        bands: [
          { name: "Band A", recordLabel: "Record Label 1" },
          { name: "Band B", recordLabel: "Record Label 1" },
        ],
      },
      {
        name: "Alpha Festival", // Duplicate festival name
        bands: [{ name: "Band A", recordLabel: "Record Label 1" }],
      },
    ]
    const results = getBandRecordLabelMap(festivals)
    expect(results).toEqual([
      {
        recordLabel: "Record Label 1",
        bands: [
          {
            bandName: "Band A",
            festivalNames: ["Alpha Festival"],
          },
          {
            bandName: "Band B",
            festivalNames: ["Alpha Festival"],
          },
        ],
      },
    ])
  })
  it("should return an empty array when there are no festivals", () => {
    const festivals: Festival[] = []
    const results = getBandRecordLabelMap(festivals)
    expect(results).toEqual([])
  })

  it("should handle multiple festivals with multiple bands under the same label", () => {
    const festivals: Festival[] = [
      {
        name: "Alpha Festival",
        bands: [
          { name: "Band A", recordLabel: "Record Label 1" },
          { name: "Band B", recordLabel: "Record Label 1" },
        ],
      },
      {
        name: "Beta Festival",
        bands: [
          { name: "Band A", recordLabel: "Record Label 1" },
          { name: "Band C", recordLabel: "Record Label 1" },
        ],
      },
      {
        name: "Gamma Festival",
        bands: [
          { name: "Band A", recordLabel: "Record Label 1" },
          { name: "Band D", recordLabel: "Record Label 1" },
        ],
      },
    ]
    const results = getBandRecordLabelMap(festivals)
    expect(results).toEqual([
      {
        recordLabel: "Record Label 1",
        bands: [
          {
            bandName: "Band A",
            festivalNames: ["Alpha Festival", "Beta Festival", "Gamma Festival"],
          },
          {
            bandName: "Band B",
            festivalNames: ["Alpha Festival"],
          },
          {
            bandName: "Band C",
            festivalNames: ["Beta Festival"],
          },
          {
            bandName: "Band D",
            festivalNames: ["Gamma Festival"],
          },
        ],
      },
    ])
  })
  it("should sort record labels, bands, and festivals alphabetically", () => {
    const festivals: Festival[] = [
      {
        name: "Delta Festival",
        bands: [
          { name: "Band D", recordLabel: "Record Label 2" },
          { name: "Band C", recordLabel: "Record Label 2" },
        ],
      },
      {
        name: "Alpha Festival",
        bands: [
          { name: "Band B", recordLabel: "Record Label 1" },
          { name: "Band A", recordLabel: "Record Label 1" },
        ],
      },
    ]
    const result = getBandRecordLabelMap(festivals)
    expect(result).toEqual([
      {
        recordLabel: "Record Label 1",
        bands: [
          {
            bandName: "Band A",
            festivalNames: ["Alpha Festival"],
          },
          {
            bandName: "Band B",
            festivalNames: ["Alpha Festival"],
          },
        ],
      },
      {
        recordLabel: "Record Label 2",
        bands: [
          {
            bandName: "Band C",
            festivalNames: ["Delta Festival"],
          },
          {
            bandName: "Band D",
            festivalNames: ["Delta Festival"],
          },
        ],
      },
    ])
  })

  it("should sort record labels, bands, and festivals case-insensitively", () => {
    const festivals: Festival[] = [
      {
        name: "alpha festival",
        bands: [
          { name: "Band B", recordLabel: "record label 1" },
          { name: "band a", recordLabel: "Record Label 1" },
        ],
      },
    ]
    const results = getBandRecordLabelMap(festivals)
    expect(results).toEqual([
      {
        recordLabel: "record label 1",
        bands: [
          { bandName: "band a", festivalNames: ["alpha festival"] },
          { bandName: "Band B", festivalNames: ["alpha festival"] },
        ],
      },
    ])
  })
})
