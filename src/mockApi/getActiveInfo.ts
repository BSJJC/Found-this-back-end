import axios from "axios";
import ActiveInfoMock from "@/mock/ActiveInfoMock";
import type activeInfoType from "@/types/activeInfoType";

async function getActiveInfo() {
  let activeInfoData: Array<activeInfoType> = []

  await axios.get(
    "/mockApi/getActiveInfo"
  )
    .then(res => {
      activeInfoData = res.data.arr;
    });

  return activeInfoData;
};

export default getActiveInfo;