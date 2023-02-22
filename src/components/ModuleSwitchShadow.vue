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
</script>

<template>
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

<style lang="scss">
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
