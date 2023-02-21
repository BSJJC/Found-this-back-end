import Mock from "mockjs";

const getAvriveInfoMock = Mock.mock("/mockApi/getActiveInfo", "get", () => {
  return Mock.mock({
    "arr|5-20": [
      {
        "number|1-1000": 1,
        "name": "@name",
        "IP": "@ip",
        "time": "@time"
      }
    ]
  })
});

export default getAvriveInfoMock;