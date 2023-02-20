import addSuffix from "@/utils/addSuffix";
import axios from "axios";

import type siteSituationType from "@/types/siteSituationType";

async function getSiteSituation() {
  let siteSituationData: Array<siteSituationType> = [];

  await axios.get(
    "/mockApi/siteSituation"
  )
    .then(res => {
      const data = res.data.arr;

      for (let i = 0; i < data.length; i++) {
        const el = data[i];


        if (el.title === "平台活跃度" || el.title === "直播间人数") {
          el.value = addSuffix(el.value, " %")
        };

        if (el.title === "人均观看时长") {
          el.value = addSuffix(el.value, " H")
        }
      }

      siteSituationData = data;
    })

  return siteSituationData;
};

export default getSiteSituation;