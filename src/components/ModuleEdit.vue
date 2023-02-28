<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useModuleListData } from "@/stores/index";

const store = useModuleListData();
const {
  showEditModule,
  listData,
  selectedModuleIndexes,
  selectedModuleData,
  editingModuleIndex,
  dataChanged,
} = storeToRefs(store);

function disablePreBtm() {
  if (editingModuleIndex.value !== 0) {
    return true;
  } else {
    return false;
  }
}

function disableNextBtn() {
  if (editingModuleIndex.value < selectedModuleIndexes.value.length - 1) {
    return true;
  } else {
    return false;
  }
}

function discardChanges() {
  ElMessageBox.confirm("Discard all changes?", "Warning", {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    type: "warning",
  })
    .then(() => {
      ElMessage({
        type: "success",
        message: "Changes discarded",
      });

      store.initSelectedModuleData();
      dataChanged.value = false;
      console.log("all changes discarded");
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Discard canceled",
      });

      console.log("discard canceled");
    });
}

function mergeData() {
  selectedModuleIndexes.value.forEach((index) => {
    listData.value[index] = selectedModuleData.value[index];
  });

  ElMessage({
    message: "Data merged",
    type: "success",
  });

  dataChanged.value = false;
  showEditModule.value = false;
}
</script>

<template>
  <el-form label-width="50px">
    <el-form-item v-show="selectedModuleIndexes.length > 1">
      <div class="min-w-[20px] text-center">
        {{ editingModuleIndex + 1 }}
      </div>
      /
      <div class="min-w-[20px] text-center">
        {{ selectedModuleIndexes.length }}
      </div>
    </el-form-item>

    <el-form-item label="title:">
      <el-input
        v-model="selectedModuleData[editingModuleIndex].title"
        @input="dataChanged = true"
      />
    </el-form-item>

    <el-form-item label="intro: ">
      <el-input
        type="textarea"
        v-model="selectedModuleData[editingModuleIndex].intro"
        :rows="2"
        @input="dataChanged = true"
      />
    </el-form-item>

    <el-form-item>
      <div class="w-full min-h-[50px] p-3 relative flex">
        <div v-show="selectedModuleIndexes.length > 1" class="absolute left-0">
          <el-button v-show="disablePreBtm()" @click="editingModuleIndex--"
            >pre module</el-button
          >
          <el-button v-show="!disablePreBtm()" disabled>pre module</el-button>

          <el-button v-show="disableNextBtn()" @click="editingModuleIndex++"
            >next module</el-button
          >
          <el-button v-show="!disableNextBtn()" disabled>next module</el-button>
        </div>

        <div class="absolute right-0">
          <el-button v-show="dataChanged" @click="discardChanges"
            >discard
          </el-button>
          <el-button v-show="!dataChanged" disabled>discard </el-button>

          <el-button v-show="dataChanged" @click="mergeData">submit</el-button>
          <el-button v-show="!dataChanged" disabled>submit</el-button>
        </div>
      </div>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.el-button {
  margin-left: 0px !important;
  margin-right: 1rem !important;
}
</style>
