import Mock from "mockjs";

const responseData = Mock.mock("/mockApi/siteSituation", "get", () => {
  return Mock.mock({
    arr: [
      {
        title: "平台人数",
        "value|100-5000": 1,
      },
      {
        title: "平台活跃度",
        "value|1-100": 1,
      },
      {
        title: "直播间人数",
        "value|1-100": 1,
      },
      {
        title: "人均观看时长",
        "value|10-200": 1,
      },
      {
        title: "板块数量",
        "value|100-200": 1,
      },
      {
        title: "话题数量",
        "value|100-500": 1,
      },
      {
        title: "评论总数",
        "value|100-5000": 1,
      },
      {
        title: "搜索人数",
        "value|100-5000": 1,
      },
    ],
  });
});

export default responseData;
