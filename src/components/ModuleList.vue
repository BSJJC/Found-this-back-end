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

const test = ref([1, 2, 3, 4, 5]);

setTimeout(() => {
  test.value.splice(2, 1);
}, 2000);
</script>

<template>
  <div class="w-full h-full pt-0">
    <div class="w-full h-full p-4 pt-0">
      <el-scrollbar class="pr-3">
        <el-checkbox-group v-model="checkboxGroup">
          <transition-group name="fade-right">
            <el-checkbox
              v-for="item in listData"
              :key="item"
              :label="item.title"
              @change="addOrRemove(item)"
              class="w-full pl-3 mb-2 border-2 border-gray-200 rounded-lg"
            >
              <div class="flex flex-row text-xl">
                <div class="w-64 ml-4 truncate transition duration-200">
                  {{ item.title }}
                </div>
                <div class="w-full ml-10 truncate transition duration-200">
                  {{ item.intro }}
                </div>
              </div>
            </el-checkbox>
          </transition-group>
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
