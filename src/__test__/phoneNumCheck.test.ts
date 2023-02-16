import { cnPhoneCheck } from "@/utils/phoneNumCheck";
import { describe, it, expect } from "vitest";

describe(
  "#cn phone number check", () => {
    it("should return true", () => {
      const testPhoneNum = "13063731525";    ///    FAKE phone number!!!
      expect(cnPhoneCheck(testPhoneNum))
        .toBeTruthy();
    });

    it("should return true", () => {
      const testPhoneNum = "13063827947";    ///    FAKE phone number!!!
      expect(cnPhoneCheck(testPhoneNum))
        .toBeTruthy();
    });

    it("should return false", () => {
      const testPhoneNum = "12345678900";
      expect(cnPhoneCheck(testPhoneNum))
        .toBeFalsy();
    });

    it("should return false", () => {
      const testPhoneNum = "123";
      expect(cnPhoneCheck(testPhoneNum))
        .toBeFalsy();
    });
  }
);