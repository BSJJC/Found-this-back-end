import Mock from "mockjs";

const getTopicList = Mock.mock("/mockApi/topicList", "get", () => {
  return Mock.mock({
    "topics|200-400": [
      {
        "number|1-100": 1,
        founder: "@name",
        title: "@title",
        startDate: "@date(yyyy-MM-dd)",
        endDate: "@date(yyyy-MM-dd)",
        releaseTime: "@time",
        "evaluationNums|50-200": 1,
      },
    ],
  });
});

export default getTopicList;
