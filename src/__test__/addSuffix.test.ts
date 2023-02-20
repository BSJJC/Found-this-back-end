import { describe, it, expect } from "vitest";
import addSuffix from "@/utils/addSuffix";

describe(
  "# add suffix", () => {
    it("should return 'testValue'", () => {
      expect(addSuffix("test", "Value"))
        .toBe("testValue")
    });

    it("should return 'test100'", () => {
      expect(addSuffix("test", "100"))
        .toBe("test100")
    })
  }
)