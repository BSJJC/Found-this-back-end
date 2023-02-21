<script lang="ts" setup>
import SiteSituation from "./SiteSituation.vue";
import VisualData from "./VisualData.vue";
</script>

<template>
  <div
    class="h-full w-full grid grid-rows-2 box-with-shadow rounded-2xl bg-white"
  >
    <div class="row-span-1">
      <site-situation></site-situation>
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
