<script lang="ts" setup>
import { storeToRefs } from "pinia";
// mock data ↓
// import getModuleList from "@/mockApi/getModuleList";
import getModels from "@/api/getModels";
import { useModuleListData } from "@/stores/index";
import { ElMessage } from "element-plus";

const store = useModuleListData();
const { listData, selectedModuleIndexes, selectedModuleData, checkboxGroup } =
  storeToRefs(store);

try {
  getModels().then((res) => {
    listData.value = res.data;

    // init checkboxGroup
    for (let i = 0; i < listData.value.length; i++) {
      checkboxGroup.value.push(false);
    }
  });
} catch (err) {
  ElMessage({ type: "error", message: "Something went wrong!" });
  throw new Error("Something went wrong!");
}

function addToSelecteds(index: number) {
  selectedModuleIndexes.value.push(index);
  selectedModuleData.value.push(listData.value[index]);
}

function removeFromSelecteds(index: number) {
  const itemIndex = selectedModuleIndexes.value.indexOf(index);
  selectedModuleIndexes.value.splice(itemIndex, 1);
}

function addOrRemove(index: number) {
  checkboxGroup.value[index] = !checkboxGroup.value[index];

  if (selectedModuleIndexes.value.indexOf(index) === -1) {
    // not in selected indexes
    addToSelecteds(index);
  } else {
    // already in selected indexes
    removeFromSelecteds(index);
  }
}
</script>

<template>
  <div class="w-full h-full pt-0">
    <div class="w-full h-full p-4 pt-0">
      <el-scrollbar class="pr-3">
        <transition-group name="fade-right">
          <div
            v-for="(i, index) in listData"
            :key="listData[index] as unknown as string"
            class="w-full h-12 mb-2 grid gap-4 grid-cols-12 border-2 rounded-lg cursor-pointer"
            :style="{
              borderColor: checkboxGroup[index] ? '#409eff' : '#E5E7EB',
              color: checkboxGroup[index] ? '#409eff' : 'black',
            }"
            @click="addOrRemove(index)"
          >
            <div class="grid-col-1 flex justify-center items-center pr-2">
              <el-checkbox v-model="checkboxGroup[index]" />
            </div>

            <div
              class="grid-col-2 col-span-3 text-xl flex justify-start items-center transition duration-100"
            >
              <div class="truncate">
                {{ i.title }}
              </div>
            </div>
            <div
              class="grid-col-3 col-span-8 text-xl flex justify-start items-center transition duration-100"
            >
              <div class="truncate">
                {{ i.intro }}
              </div>
            </div>
          </div>
        </transition-group>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss">
.el-checkbox {
  transform: scale(1.6) !important;
}
</style>
