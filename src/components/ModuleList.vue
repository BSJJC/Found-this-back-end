<script lang="ts" setup>
import { storeToRefs } from "pinia";
import getModuleList from "@/api/getModuleList";
import { useModuleListData } from "@/stores/index";

const store = useModuleListData();
let { data } = storeToRefs(store);

getModuleList().then((res) => {
  data.value = res;
});
</script>

<template>
  <div class="w-full h-full pt-0">
    <div class="w-full h-full p-4 pt-0">
      <el-scrollbar class="pr-3">
        <div
          class="w-full h-12 mb-4 flex justify-center items-center border-2 border-gray-200 rounded-lg"
          v-for="(i, index) in data"
          :key="index"
        >
          <el-checkbox class="w-full pl-4">
            <div class="w-full flex flex-row text-xl">
              <div class="w-64 ml-4 truncate transition duration-200">
                {{ i.title }}
              </div>
              <div class="w-full ml-10 truncate transition duration-200">
                {{ i.intro }}
              </div>
            </div>
          </el-checkbox>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss">
.el-checkbox__input {
  transform: scale(1.6);
}

.el-checkbox__label {
  width: 100%;
}
</style>
