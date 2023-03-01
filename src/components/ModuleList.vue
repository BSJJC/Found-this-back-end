<script lang="ts" setup>
import { storeToRefs } from "pinia";
import getModuleList from "@/api/getModuleList";
import { useModuleListData } from "@/stores/index";

const store = useModuleListData();
const { listData, selectedModuleIndexes, checkboxGroup } = storeToRefs(store);

getModuleList().then((res) => {
  listData.value = res;

  // init checkboxGroup
  for (let i = 0; i < listData.value.length; i++) {
    checkboxGroup.value.push(false);
  }
});

function addToSelecteds(index: number) {
  selectedModuleIndexes.value.push(index);
}

function removeFromSelecteds(index: number) {
  const itemIndex = selectedModuleIndexes.value.indexOf(index);
  selectedModuleIndexes.value.splice(itemIndex, 1);
}

function addOrRemove(_index: { title: string; intro: string }) {
  const index = listData.value.indexOf(_index);

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
            :key="index"
            class="w-full h-12 mb-2 grid gap-4 grid-cols-12 border-2 rounded-lg cursor-pointer"
            :style="{
              borderColor: checkboxGroup[index] ? '#409eff' : '#E5E7EB',
              color: checkboxGroup[index] ? '#409eff' : 'black',
            }"
            @click="checkboxGroup[index] = !checkboxGroup[index]"
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

.fade-right-move,
.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-right-enter-from,
.fade-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.fade-right-enter-to,
.fade-right-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
</style>
