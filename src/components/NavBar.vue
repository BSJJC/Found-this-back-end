<script lang="ts" setup>
import { reactive } from "vue";
import getTime from "@/utils/getTime";
import addPrefix from "@/utils/addPrefix";
import copyObjectProp from "@/utils/copyObjectProp";
import type timeType from "@/types/timeType";

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

setInterval(() => {
  const timestampNow: string = new Date().getTime().toString();
  const newTimeData: timeType = getTime(timestampNow);
  copyObjectProp(timeData, newTimeData);
}, 1000);
</script>

<template>
  <div class="bg-red-300 w-full h-full rounded-b-2xl">
    <div class="mx-[15px] h-full flex justify-between items-center">
      <div class="h-full grid cursor-default select-none">
        <p class="flex justify-center items-end">互联网+</p>
        <p class="flex justify-center items-start">在线服务平台</p>
      </div>

      <div class="flex flex-row">
        <div class="flex flex-row">
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
            {{ timeData.day }}
          </div>
          <div class="variable-element">
            {{ timeData.hour }}
          </div>
          :
          <div class="variable-element">
            {{ timeData.minute }}
          </div>
          :
          <div class="variable-element">
            {{ timeData.second }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.el-header {
  padding-right: 0px !important;
}

.variable-element {
  @apply min-w-[20px] text-center;
}
</style>
