import { describe, it, expect, expectTypeOf } from "vitest";
import copyObjectProp from "@/utils/copyObjectProp";

interface testType {
  [x: string]: string | number;
}

let objA: testType = {
  name: "Joe"
};

let objB: testType = {
  name: "Mike"
}

describe(
  "# copy object prop", () => {
    it("objA name prop change to Mike", () => {
      expect(copyObjectProp(objA, objB))
        .toStrictEqual({ name: "Mike" })
    });

    it("objA get nothing", () => {
      delete objB["name"];
      expect(copyObjectProp(objA, objB))
        .toStrictEqual(objA)
    });

    it("objA get nothing", () => {
      objB.age = 15;
      expect(copyObjectProp(objA, objB))
        .toStrictEqual(objA)
    });
  }
)