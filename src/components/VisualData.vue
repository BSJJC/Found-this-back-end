<script lang="ts" setup>
import PlateQuantityCom from "./PlateQuantityCom.vue";
import SearchTrend from "./SearchTrend.vue";
import ActiveInfo from "./ActiveInfo.vue";
</script>

<template>
  <div class="w-full h-full grid grid-cols-3">
    <div class="grid-cols-1">
      <plate-quantity-com></plate-quantity-com>
    </div>
    <div class="grid-cols-1">
      <search-trend></search-trend>
    </div>
    <div class="grid-cols-1 p-10">
      <active-info></active-info>
    </div>
  </div>
</template>
