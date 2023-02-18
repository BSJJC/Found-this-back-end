<script lang="ts" setup>
import SiteSituation from "./SiteSituation.vue";
import VisualData from "./VisualData.vue";

const testArr = [
  {
    title: "平台人数",
    value: 114514,
  },
];
</script>

<template>
  <div class="h-full w-full grid grid-rows-2 box-with-shadow rounded-2xl">
    <div class="row-span-1">
      <site-situation :dataArr="testArr"></site-situation>
    </div>
    <div class="row-span-1">
      <visual-data></visual-data>
    </div>
  </div>
</template>

<style lang="scss">
.el-main {
  padding: 15px 15px 15px 20px !important;
}
</style>
