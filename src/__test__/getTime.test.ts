import { describe, it, expect } from "vitest";
import getTime from "@/utils/getTime";

const testTimestamp = "1676861804000";
const testObj = {
  year: 2023,
  month: 2,
  date: 20,
  hour: 10,
  minute: 56,
  second: 44,
  day: "星期一"
}

describe(
  "# get time", () => {
    it("should return testObj", () => {
      expect(getTime(testTimestamp))
        .toStrictEqual(testObj)
    })
  }
)