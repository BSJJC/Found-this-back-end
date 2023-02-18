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
  <div class="w-full h-full rounded-b-2xl box-with-shadow">
    <div class="mx-[20px] h-full flex justify-between items-center select-none">
      <div class="h-full grid cursor-default">
        <p class="flex justify-center items-end">互联网+</p>
        <p class="flex justify-center items-start">在线服务平台</p>
      </div>

      <div class="flex h-full">
        <!-- time bar -->
        <div class="flex justify-center items-center h-full">
          <div class="variable-element">{{ timeData.year }}</div>
          <div>年</div>
          <div class="variable-element">
            {{ addPrefix(timeData.month) }}
          </div>
          <div>月</div>
          <div class="variable-element">
            {{ addPrefix(timeData.date) }}
          </div>
          <div>日</div>
          <div class="mx-2">
            {{ addPrefix(timeData.day) }}
          </div>
          <div class="variable-element">
            {{ addPrefix(timeData.hour) }}
          </div>
          :
          <div class="variable-element">
            {{ addPrefix(timeData.minute) }}
          </div>
          :
          <div class="variable-element">
            {{ addPrefix(timeData.second) }}
          </div>
        </div>

        <!-- log out button -->
        <div class="ml-4 flex items-center cursor-pointer">
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
</style>
