<script lang="ts" setup>
import getTime from "@/utils/getTime";
import addPrefix from "@/utils/addPrefix";
import copyObjectProp from "@/utils/copyObjectProp";
import type timeType from "@/types/timeType";

///    init time
const initTimestamp: string = new Date().getTime().toString();
const initTimeData: timeType = getTime(initTimestamp);

let timeData = reactive<timeType>({
  year: "",
  month: "",
  date: "",
  hour: "",
  minute: "",
  second: "",
  day: "",
});
copyObjectProp(timeData, initTimeData);

///    update time per sec
setInterval(() => {
  const timestampNow: string = new Date().getTime().toString();
  const newTimeData: timeType = getTime(timestampNow);
  copyObjectProp(timeData, newTimeData);
}, 1000);
</script>

<template>
  <div class="w-full h-full rounded-b-2xl box-with-shadow bg-white">
    <div class="mx-[20px] h-full flex justify-between items-center">
      <div id="title" class="h-full grid cursor-default">
        <p class="flex justify-center items-end">互联网+</p>
        <p class="flex justify-center items-start">在线服务平台</p>
      </div>

      <div class="flex h-full">
        <!-- time bar -->
        <div id="title" class="flex justify-center items-center h-full">
          <div class="variable-element">{{ timeData.year }}</div>
          <div>年</div>
          <div class="variable-element">
            {{
              timeData.month >= 1 && timeData.month <= 9
                ? addPrefix(timeData.month, "0")
                : timeData.month
            }}
          </div>
          <div>月</div>
          <div class="variable-element">
            {{
              timeData.date >= 1 && timeData.date <= 9
                ? addPrefix(timeData.date, "0")
                : timeData.date
            }}
          </div>
          <div>日</div>
          <div class="mx-2">
            {{
              timeData.day >= 1 && timeData.day <= 9
                ? addPrefix(timeData.day, "0")
                : timeData.day
            }}
          </div>
          <div class="variable-element">
            {{
              timeData.hour >= 1 && timeData.hour <= 9
                ? addPrefix(timeData.hour, "0")
                : timeData.hour
            }}
          </div>
          :
          <div class="variable-element">
            {{
              timeData.minute >= 1 && timeData.minute <= 9
                ? addPrefix(timeData.minute, "0")
                : timeData.minute
            }}
          </div>
          :
          <div class="variable-element">
            {{
              timeData.second >= 1 && timeData.second <= 9
                ? addPrefix(timeData.second, "0")
                : timeData.second
            }}
          </div>
        </div>

        <!-- log out button -->
        <div id="title" class="ml-4 flex items-center cursor-pointer">
          <i-ep-SwitchButton />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.el-header {
  height: 80px !important;
  padding-right: 0px !important;
  padding-bottom: 15px !important;
}

.variable-element {
  @apply min-w-[20px] text-center;
}

#title {
  color: var(--font-color-info);
}
</style>
