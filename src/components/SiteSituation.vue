<script lang="ts" setup>
import axios from "axios";

axios.get("/mockApi/get/news").then((res) => {
  console.log(res.data);
});

const props = defineProps({
  dataArr: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<template>
  <div class="flex flex-row flex-wrap content-around full h-full">
    <div v-for="(i, index) in 8" :key="index" class="card">
      <div class="card-inside">
        <div class="col-span-1 flex justify-center">
          <i-ep-user class="h-full w-2/6" />
        </div>
        <div class="col-span-1 grid grid-rows-2">
          <div class="flex justify-center items-end text-xl">平台人数</div>
          <div class="flex justify-center items-start text-3xl font-bold">
            8050
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  @apply w-1/4 h-2/5 flex justify-center items-center;
}

.card-inside {
  @apply grid grid-cols-2 w-95  h-70 rounded-lg bg-red-100;
}
</style>
