import axios from "axios";
import getModuleListMock from "@/mock/ModuleListMock";
import type moduleListType from "@/types/moduleListType";

async function getModuleList() {
  let data: moduleListType[] = [];

  await axios.get(
    "/mockApi/getModuleList"
  )
    .then(res => {
      data = res.data.arr;
    })

  return data;
}

export default getModuleList;