<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useModuleListData } from "@/stores/index";
import type { FormInstance } from "element-plus";

const store = useModuleListData();
const {
  showEditModule,
  listData,
  selectedModuleIndexes,
  selectedModuleData,
  editingModuleIndex,
  checkboxGroup,
  dataChanged,
} = storeToRefs(store);

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  title: selectedModuleData.value[editingModuleIndex.value].title,
  intro: selectedModuleData.value[editingModuleIndex.value].intro,
});
function isEmpty(rule: any, value: any, callback: any) {
  if (value.length === 0) {
    callback(new Error());
  }
}
const rules = reactive({
  title: [{ validator: isEmpty, trigger: "blur" }],
  intro: [{ validator: isEmpty, trigger: "blur" }],
});

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
  for (let i = 0; i < selectedModuleIndexes.value.length; i++) {
    listData.value[selectedModuleIndexes.value[i]] =
      selectedModuleData.value[i];
  }

  ElMessage({
    message: "Data merged",
    type: "success",
  });

  checkboxGroup.value = [];
  selectedModuleIndexes.value = [];
  dataChanged.value = false;
  showEditModule.value = false;
  selectedModuleIndexes.value = [];
  editingModuleIndex.value = 0;
}

function verifyInput() {
  if (ruleForm.title.length === 0 || ruleForm.intro.length === 0) {
    return false;
  } else {
    return true;
  }
}
</script>

<template>
  <el-form
    label-width="50px"
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
  >
    <el-form-item v-show="selectedModuleIndexes.length > 1">
      <div class="min-w-[20px] text-center">
        {{ editingModuleIndex + 1 }}
      </div>
      /
      <div class="min-w-[20px] text-center">
        {{ selectedModuleIndexes.length }}
      </div>
    </el-form-item>

    <el-form-item label="title:" prop="title">
      <el-input
        v-model="selectedModuleData[editingModuleIndex].title"
        @input="
          () => {
            ruleForm.title = selectedModuleData[editingModuleIndex].title;
            dataChanged = true;
          }
        "
      />
    </el-form-item>

    <el-form-item label="intro: " prop="intro">
      <el-input
        type="textarea"
        v-model="selectedModuleData[editingModuleIndex].intro"
        :rows="2"
        @input="
          () => {
            ruleForm.intro = selectedModuleData[editingModuleIndex].intro;
            dataChanged = true;
          }
        "
      />
    </el-form-item>

    <el-form-item>
      <div class="w-full min-h-[50px] p-3 relative flex">
        <div v-show="selectedModuleIndexes.length > 1" class="absolute left-0">
          <el-button
            v-show="disablePreBtm() && verifyInput()"
            @click="editingModuleIndex--"
            type="info"
            >pre module</el-button
          >
          <el-button
            v-show="!disablePreBtm() || !verifyInput()"
            type="info"
            disabled
            >pre module</el-button
          >

          <el-button
            v-show="disableNextBtn() && verifyInput()"
            @click="editingModuleIndex++"
            type="info"
            >next module</el-button
          >
          <el-button
            v-show="!disableNextBtn() || !verifyInput()"
            type="info"
            disabled
            >next module</el-button
          >
        </div>

        <div class="absolute right-0">
          <el-button
            v-show="dataChanged && verifyInput()"
            @click="discardChanges"
            type="danger"
            >discard
          </el-button>
          <el-button
            v-show="!dataChanged || !verifyInput()"
            type="danger"
            disabled
            >discard
          </el-button>

          <el-button
            v-show="dataChanged && verifyInput()"
            @click="mergeData"
            type="success"
            >submit</el-button
          >
          <el-button
            v-show="!dataChanged || !verifyInput()"
            type="success"
            disabled
            >submit</el-button
          >
        </div>
      </div>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.el-button {
  margin-left: 0.5rem !important;
  margin-right: 0.5rem !important;
}
</style>
