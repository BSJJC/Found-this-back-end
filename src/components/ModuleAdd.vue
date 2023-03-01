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
  title: "",
  intro: "",
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

function resetData() {
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
    <el-form-item label="title:" prop="title">
      <el-input v-model="ruleForm.title" />
    </el-form-item>

    <el-form-item label="intro: " prop="intro">
      <el-input type="textarea" :rows="2" v-model="ruleForm.intro" />
    </el-form-item>

    <el-form-item>
      <div class="w-full min-h-[50px] p-3 relative flex">
        <div class="absolute right-0">
          <el-button
            v-show="dataChanged && verifyInput()"
            @click="resetData"
            type="danger"
            >clear
          </el-button>
          <el-button
            v-show="!dataChanged || !verifyInput()"
            type="danger"
            disabled
            >clear
          </el-button>

          <el-button v-show="dataChanged && verifyInput()" type="success"
            >add</el-button
          >
          <el-button
            v-show="!dataChanged || !verifyInput()"
            type="success"
            disabled
            >add</el-button
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
