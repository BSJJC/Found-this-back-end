import axios from "axios";
import ActiveInfo from "@/mock/ActiveInfo";

async function getActiveInfo() {
  let data;

  await axios.get("/mockApi/getActiveInfo")
    .then(res => {
      data = res.data.arr;
    });

  return data;
};

export default getActiveInfo;