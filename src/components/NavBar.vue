<script lang="ts" setup>
import getTime from "@/utils/getTime";

const timeNow = new Date().getTime().toString();
const { year, month, date, hour, minute, second, day } = getTime(timeNow);
console.log(getTime(timeNow));
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
          <div class="min-w-[35px]">{{ year }}</div>
          <div>年</div>
          <div class="min-w-[35px]">{{ month }}</div>
          <div>月</div>
          <div class="min-w-[35px]">{{ date }}</div>
          <div>日</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.el-header {
  padding-right: 0px !important;
}
</style>
