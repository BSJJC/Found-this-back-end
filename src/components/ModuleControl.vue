<script lang="ts" setup>
import { storeToRefs } from "pinia";
import ModuleEdit from "./ModuleEdit.vue";
import ModuleAdd from "./ModuleAdd.vue";
import { useModuleListData } from "@/stores/index";

const store = useModuleListData();
const {
  listData,
  showEditModule,
  showAddModule,
  selectedModuleIndexes,
  selectedModuleData,
  editingModuleIndex,
  dataChanged,
} = storeToRefs(store);

function openModuleEdit() {
  if (selectedModuleIndexes.value.length >= 1) {
    selectedModuleIndexes.value.sort((a, b) => a - b);

    store.initSelectedModuleData();

    showEditModule.value = true;
  } else {
    ElMessage({
      type: "warning",
      message: "No module selected for modification",
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

function deleteModule() {
  if (selectedModuleIndexes.value.length === 0) {
    ElMessage({
      message: "Please check the modules to delete.",
      type: "warning",
    });
  } else {
    ElMessageBox.confirm(
      "Are you sure to delete the selected modules?",
      "Warning",
      {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      }
    )
      .then(() => {
        selectedModuleIndexes.value = selectedModuleIndexes.value.sort(
          (a, b) => a - b
        );

        for (let i = selectedModuleIndexes.value.length; i--; i >= 0) {
          listData.value.splice(selectedModuleIndexes.value[i], 1);
        }
        selectedModuleIndexes.value = [];

        ElMessage({
          type: "success",
          message: "Module deleted",
        });
      })
      .catch(() => {
        ElMessage({
          type: "info",
          message: "Delete canceled",
        });
      });
  }
}
</script>

<template>
  <div class="w-full h-full pt-4 flex flex-row justify-between">
    <!-- module edit area -->
    <div class="w-1/2 h-full flex justify-start items-center pl-2">
      <i-ep-Document
        class="mx-3 text-xl opacity-40 cursor-pointer"
        @click="openModuleEdit"
      />

      <!-- edit module -->
      <el-dialog
        v-model="showEditModule"
        title="Edit module"
        draggable
        @open="resetData"
        :before-close="closeConfirm"
        destroy-on-close
        align-center
      >
        <module-edit></module-edit>
      </el-dialog>

      <i-ep-Delete
        class="mx-3 text-xl opacity-40 cursor-pointer"
        @click="deleteModule"
      />
    </div>
    <!-- module add button -->
    <div class="flex justify-center items-center pr-5">
      <el-button class="mr-8 w-20" @click="showAddModule = true"
        >添加</el-button
      >

      <!-- add module -->
      <el-dialog v-model="showAddModule" title="Add module" draggable>
        <module-add></module-add>
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
