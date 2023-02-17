import type timeType from "@/types/timeType";

function getTime(timestamp: string): timeType {
  const now: Date = new Date(parseFloat(timestamp));

  const year: number = now.getFullYear();
  const month: number = now.getMonth() + 1;
  const date: number = now.getDate();

  const hour: number = now.getHours();
  const minute: number = now.getMinutes();
  const second: number = now.getSeconds();

  const dayList: string[] = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ];
  const day: string = dayList[now.getDay()];

  return {
    year,
    month,
    date,
    hour,
    minute,
    second,
    day
  };
};

export default getTime;