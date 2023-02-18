import axios from "axios";
import type siteSituationType from "@/types/siteSituationType";

async function getSiteSituation() {
  let siteSituationData: Array<siteSituationType> = [];

  await axios.get(
    "/mockApi/siteSituation"
  )
    .then(res => {
      siteSituationData = res.data.arr;
    })

  return siteSituationData;
};

export default getSiteSituation;