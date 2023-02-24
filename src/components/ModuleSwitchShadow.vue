<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useModuleSwitch } from "@/stores/index";

const store = useModuleSwitch();
const { hoverIndex, selectedIndex, pages } = storeToRefs(store);

///    init module switch shadow position
for (let i = 0; i < pages.value.length; i++) {
  const urlNow = window.location.href.split("/home")[1];
  const url = pages.value[i].path?.split("/home")[1];

  if (urlNow === url) {
    selectedIndex.value = i;
    hoverIndex.value = i;
    break;
  }
}
</script>

<template>
  <!-- selected item shadow -->
  <div
    class="absolute w-full h-[94px] ease-in-out duration-300"
    :style="{ marginTop: `${selectedIndex * 94}px` }"
  >
    <!-- top concave triangle -->
    <div class="circle-wrapper ml-[calc(100%-20px)]">
      <div id="top" class="circle"></div>
    </div>

    <!-- mid -->
    <div
      class="w-[95%] h-[calc(100%-40px)] ml-[5%] rounded-l-3xl bg-gray-200"
    ></div>

    <!-- bttom concave triangle -->
    <div class="circle-wrapper ml-[calc(100%-20px)]">
      <div id="bottom" class="circle"></div>
    </div>
  </div>

  <!-- hover item shadow -->
  <div
    class="absolute w-full h-[94px] mt-0 ease-in-out duration-300"
    :style="{ marginTop: `${hoverIndex * 94}px` }"
  >
    <!-- top concave triangle -->
    <div class="circle-wrapper ml-[calc(100%-20px)]"></div>

    <!-- mid -->
    <div
      class="w-[90%] h-[calc(100%-40px)] ml-[5%] rounded-3xl bg-gray-200"
    ></div>

    <!-- bttom concave triangle -->
    <div class="circle-wrapper ml-[calc(100%-20px)]"></div>
  </div>
</template>

<style lang="scss" scoped>
$circle-wrapper: 20px;
$circle: 130px;
$border: 41px;

.circle-wrapper {
  background-color: transparent;
  overflow: hidden;
  width: $circle-wrapper;
  height: $circle-wrapper;
  float: left;
  background-color: transparent;
  position: relative;

  .circle {
    border-radius: 50%;
    border: $border solid #e5e7eb;
    width: $circle;
    height: $circle;
    position: absolute;

    &#top {
      right: -$border;
      bottom: -$border;
    }

    &#bottom {
      right: -$border;
      top: -$border;
    }
  }
}
</style>
