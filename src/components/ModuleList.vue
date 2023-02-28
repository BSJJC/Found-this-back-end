<script lang="ts" setup>
import { storeToRefs } from "pinia";
import getModuleList from "@/api/getModuleList";
import { useModuleListData } from "@/stores/index";

const store = useModuleListData();
const { listData, selectedModuleIndexes, checkboxGroup } = storeToRefs(store);

getModuleList().then((res) => {
  listData.value = res;
});

/**
 *  add the selected object to selected modules
 * @param index the index of the selected item
 */
function addToSelecteds(index: number) {
  selectedModuleIndexes.value.push(index);
}

/**
 *  remove the selected object from selected modules
 * @param index the index of the selected item
 */
function removeFromSelecteds(index: number) {
  const itemIndex = selectedModuleIndexes.value.indexOf(index);
  selectedModuleIndexes.value.splice(itemIndex, 1);
}

/**
 *  add of remove an object into or from selected moduels
 * @param index the index of te selected item
 */
function addOrRemove(index: number) {
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
        <el-checkbox-group
          v-model="checkboxGroup"
          class="flex flex-col justify-center items-center w-full h-full pl-2"
        >
          <el-checkbox
            v-for="(i, index) in listData"
            :key="index"
            :label="i.title"
            @change="addOrRemove(index)"
            class="w-full pl-3 mb-2 border-2 border-gray-200 rounded-lg"
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
        </el-checkbox-group>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss">
.el-checkbox {
  margin-right: 10px !important;
  height: 50px !important;
}

.el-checkbox__input {
  transform: scale(1.6);
}

.el-checkbox__label {
  width: 100%;
}
</style>
