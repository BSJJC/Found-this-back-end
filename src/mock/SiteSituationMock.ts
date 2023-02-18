import Mock from "mockjs";

const responseData = Mock.mock('/mockApi/siteSituation', 'get', () => {
  return Mock.mock({
    "arr|8": [
      {
        "title": "@title(1)",
        "value|100-5000": 1
      }
    ]
  })
});

export default responseData;