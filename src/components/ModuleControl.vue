<script lang="ts" setup>
import { storeToRefs } from "pinia";
import ModuleEdit from "./ModuleEdit.vue";
import ModuleAdd from "./ModuleAdd.vue";
import { useModuleListData } from "@/stores/index";
import { ElMessage, ElMessageBox } from "element-plus";
import deleteModel from "@/api/deleteModel";

const store = useModuleListData();
const {
  listData,
  showEditModule,
  showAddModule,
  selectedModuleIndexes,
  selectedModuleData,
  editingModuleIndex,
  dataChanged,
  checkboxGroup,
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

function deleteModules() {
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
      .then(async () => {
        const titles: string[] = [];

        selectedModuleData.value.forEach((item) => {
          titles.push(item.title);
        });

        await deleteModel(titles);

        // Sort the array sequentially and delete from the back to the front when deleting to prevent animation errors
        selectedModuleIndexes.value = selectedModuleIndexes.value.sort(
          (a, b) => a - b
        );
        for (let i = selectedModuleIndexes.value.length; i--; i >= 0) {
          listData.value.splice(selectedModuleIndexes.value[i], 1);
          checkboxGroup.value.splice(selectedModuleIndexes.value[i], 1);
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
        @click="deleteModules"
      />
    </div>
    <div class="flex justify-center items-center pr-5">
      <el-button class="mr-8 w-20" @click="showAddModule = true" type="primary"
        >添加</el-button
      >

      <!-- add module -->
      <el-dialog
        v-model="showAddModule"
        title="Add module"
        draggable
        destroy-on-close
        align-center
      >
        <module-add></module-add>
      </el-dialog>
    </div>
  </div>
</template>
