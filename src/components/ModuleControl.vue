<script lang="ts" setup>
import { storeToRefs } from "pinia";
import ModuleEdit from "./ModuleEdit.vue";
import { useModuleListData } from "@/stores/index";

const editModule = ref(false);
const addModule = ref(false);

const store = useModuleListData();
const {
  selectedModuleIndexes,
  selectedModuleData,
  editingModuleIndex,
  dataChanged,
} = storeToRefs(store);

function showEditModule() {
  if (selectedModuleIndexes.value.length >= 1) {
    selectedModuleIndexes.value.sort((a, b) => a - b);

    store.initSelectedModuleData();

    editModule.value = true;
  } else {
    ElMessage({
      type: "warning",
      message: "尚未选中需修改的模块",
      duration: 3000,
    });
  }
}

function resetData() {
  editingModuleIndex.value = 0;
  selectedModuleData.value = [];

  store.initSelectedModuleData();
}

function closeConfirm(done: () => void) {
  if (dataChanged.value) {
    ElMessageBox.confirm("Discard changed data?")
      .then(() => {
        dataChanged.value = false;
        done();
      })
      .catch(() => {
        console.log("cancel close");
      });
  } else {
    done();
    dataChanged.value = false;
  }
}
</script>

<template>
  <div class="w-full h-full pt-4 flex flex-row justify-between">
    <!-- module edit area -->
    <div class="w-1/2 h-full flex justify-start items-center pl-2">
      <i-ep-Document
        class="mx-3 text-xl opacity-40 cursor-pointer"
        @click="showEditModule"
      />

      <!-- edit module -->
      <el-dialog
        v-model="editModule"
        title="Edit module"
        draggable
        @open="resetData"
        :before-close="closeConfirm"
      >
        <module-edit></module-edit>
      </el-dialog>

      <i-ep-Delete class="mx-3 text-xl opacity-40 cursor-pointer" />
    </div>
    <!-- module add button -->
    <div class="flex justify-center items-center pr-5">
      <el-button class="mr-8 w-20" @click="addModule = true">添加</el-button>

      <!-- add module -->
      <el-dialog v-model="addModule" title="Add module" draggable>
        <module-edit></module-edit>
      </el-dialog>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-button {
  background-color: #3785ea;
  color: white;
  border: none;
  font-size: bold;

  &:hover {
    background-color: #3785ea;
    color: rgb(227, 227, 227);
  }
}
</style>
