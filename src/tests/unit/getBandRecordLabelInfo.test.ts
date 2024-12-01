import { describe, it, expect } from "vitest"
import { Festival } from "../../types"
import { bandRecordLabelMap } from "../../utils/getBandRecordLabelInfo"

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
    const result = bandRecordLabelMap(festivals)
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
    const results = bandRecordLabelMap(festivals)
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
    const results = bandRecordLabelMap(festivals)
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
    const results = bandRecordLabelMap(festivals)
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
    const results = bandRecordLabelMap(festivals)
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
})
