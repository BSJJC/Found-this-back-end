import axios from "axios";
import getTopicList from "@/mock/TopicListMock";
import type topicType from "@/types/topicType";

async function getTopicLsit() {
  let data: topicType[] = [];

  await axios.get("/mockApi/topicList").then((res) => {
    data = res.data.topics;
  });

  return data;
}

export default getTopicLsit;
