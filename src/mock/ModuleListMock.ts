import Mock from "mockjs";

const getModuleListMock = Mock.mock(
  "/mockApi/getModuleList",
  "get",
  () => {
    return Mock.mock({
      "arr|10-40": [
        {
          "title": "@ctitle",
          "intro": "@csentence"
        }
      ]
    })
  }
);

export default getModuleListMock;