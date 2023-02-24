<script lang="ts" setup>
import { storeToRefs } from "pinia";
import getModuleList from "@/api/getModuleList";
import { useModuleListData } from "@/stores/index";
import type moduleListType from "@/types/moduleListType";

const store = useModuleListData();
const { listData, selectedModules } = storeToRefs(store);

const temp: Array<number> = [];
const selectedIndexes = ref(temp);

getModuleList().then((res) => {
  listData.value = res;
});

/**
 *  add the selected object to selected modules
 * @param index the index of the selected item
 * @param object the object of the selected object
 */
function addToSelecteds(index: number, object: moduleListType) {
  selectedModules.value.push(object);
  selectedIndexes.value.push(index);
}

/**
 *  remove the selected object from selected modules
 * @param index the index of the selected item
 */
function removeFromSelecteds(index: number) {
  const itemIndex = selectedIndexes.value.indexOf(index);
  selectedIndexes.value.splice(itemIndex, 1);
  selectedModules.value.splice(itemIndex, 1);
}

/**
 *  add of remove an object into or from selected moduels
 * @param index the index of te selected item
 * @param object the selected object
 */
function addOrRemove(index: number, object: moduleListType) {
  console.log(selectedIndexes.value.indexOf(index));

  if (selectedIndexes.value.indexOf(index)) {
    // not in selected indexes
    addToSelecteds(index, object);
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
        <div
          class="w-full h-12 mb-4 flex justify-center items-center border-2 border-gray-200 rounded-lg"
          v-for="(i, index) in listData"
          :key="index"
        >
          <el-checkbox
            class="w-full pl-4"
            @change="addOrRemove(index, { title: i.title, intro: i.intro })"
          >
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
