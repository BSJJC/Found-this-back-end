import axios from "axios";
import getTopicList from "@/mock/TopicListMock";

async function getTopicLsit() {
  let data;

  await axios.get("/mockApi/topicList").then((res) => {
    data = res.data;
  });

  return data;
}

export default getTopicLsit;
