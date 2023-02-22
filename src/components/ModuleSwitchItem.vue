<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useModuleSwitch } from "@/stores/index";

const store = useModuleSwitch();
const { hoverIndex, selectedIndex } = storeToRefs(store);

let hoverIndexResetTartget = ref(0);

function hoverIndexChange(newIndex: number) {
  hoverIndex.value = newIndex;
}

function hoverIndexReset() {
  hoverIndex.value = hoverIndexResetTartget.value;
}

function selectedIndexChange(newIndex: number) {
  selectedIndex.value = newIndex;
  hoverIndex.value = newIndex;
  hoverIndexResetTartget.value = newIndex;
}
</script>

<template>
  <div
    class="w-full h-[70px] grid grid-cols-6 my-3 cursor-pointer z-10"
    v-for="(i, index) in 4"
    :key="index"
    @mousedown="selectedIndexChange(index)"
    @mouseenter="hoverIndexChange(index)"
    @mouseleave="hoverIndexReset"
  >
    <div
      class="grid-col-2 col-span-2 flex justify-end items-center pr-3 text-2xl"
    >
      <i-ep-HomeFilled />
    </div>
    <div
      class="grid-col-4 col-span-4 w-full flex justify-start items-center text-xl"
    >
      首页{{ i }}
    </div>
  </div>
</template>
