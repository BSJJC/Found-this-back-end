import { describe, it, expect } from "vitest";
import addPrefix from "@/utils/addPrefix";

describe(
  "# add prefix", () => {
    it("should return 'testValue'", () => {
      expect(addPrefix("Value", "test"))
        .toBe("testValue")
    });

    it("should return 'test100'", () => {
      expect(addPrefix(100, "test"))
        .toBe("test100")
    })
  }
)