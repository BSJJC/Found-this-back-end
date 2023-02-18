<script lang="ts" setup>
import getSiteSituation from "@/api/getSiteSituation";
import type siteSituationType from "@/types/siteSituationType";

let data = ref<Array<string>>();

data.value?.push("123");

console.log(data.value);
</script>

<template>
  <div class="flex flex-row flex-wrap content-around full h-full">
    <div v-for="(i, index) in data ? data : 8" :key="index" class="card">
      <div class="card-inside">
        <div class="col-span-1 flex justify-center">
          <IEpUser class="h-full w-2/6" />
        </div>
        <div class="col-span-1 grid grid-rows-2">
          <div class="flex justify-center items-end text-xl">title</div>
          <div class="flex justify-center items-start text-3xl font-bold">
            value
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
  @apply grid grid-cols-2 w-11/12 h-5/6 rounded-lg bg-red-100;
}
</style>
