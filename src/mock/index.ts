import Mock from "mockjs";

const responseData = Mock.mock('/mockApi/get/news', 'get', () => {
  return {
    status: 200,
    message: '获取新闻列表数据成功'
  }
});

export default responseData;