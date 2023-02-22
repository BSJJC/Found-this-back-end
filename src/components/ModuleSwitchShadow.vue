<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useModuleSwitch } from "@/stores/index";

const store = useModuleSwitch();
const { hoverIndex, selectedIndex } = storeToRefs(store);

watch(selectedIndex, (newVal, oldVal) => {
  console.log("selected indedx changed");
  console.log("old value " + oldVal);
  console.log("new value " + newVal);
});

watch(hoverIndex, (newVal, oldVal) => {
  console.log("hover index changed");
  console.log("old value " + oldVal);
  console.log("new value " + newVal);
});
</script>

<template>
  <div class="absolute w-full h-[94px] z-0">
    <div class="relative w-full h-[20px]">
      <div class="absolute w-full h-full bg-gray-200"></div>
      <div class="absolute w-full h-full bg-white rounded-br-3xl"></div>
    </div>
    <div class="flex flex-row w-full h-[calc(100%-40px)]">
      <div class="w-1/12 h-full bg-white"></div>
      <div class="w-11/12 h-full bg-gray-200 rounded-l-3xl"></div>
    </div>
    <div class="relative w-full h-[20px]">
      <div class="absolute w-full h-full bg-gray-200"></div>
      <div class="absolute w-full h-full bg-white rounded-tr-3xl"></div>
    </div>
  </div>
</template>
