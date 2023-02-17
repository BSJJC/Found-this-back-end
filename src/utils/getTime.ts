import type timeType from "@/types/timeType";

function addPrefix(str: string | number): string | number {
  if (str >= 0 && str <= 9) {
    str = "0" + str;
  }
  return str;
};

function getTime(timestamp: string): timeType {
  const now: Date = new Date(parseFloat(timestamp));

  const year: string | number = now.getFullYear();
  let month: string | number = now.getMonth() + 1;
  let date: string | number = now.getDate();
  addPrefix(month);
  addPrefix(date);

  let hour: string | number = now.getHours();
  let minute: string | number = now.getMinutes();
  let second: string | number = now.getSeconds();
  addPrefix(hour);
  addPrefix(minute);
  addPrefix(second);

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