<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useModuleListData } from "@/stores/index";
import type { FormInstance } from "element-plus";
import { ElMessage, ElMessageBox } from "element-plus";
import addModel from "@/api/addModel";

const store = useModuleListData();
const { listData, showAddModule } = storeToRefs(store);

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
  ElMessageBox.confirm("Discard all data?", "Warning", {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    type: "warning",
  })
    .then(() => {
      ElMessage({
        type: "success",
        message: "Data discarded",
      });

      clearRuleForm();
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

function clearRuleForm() {
  ruleForm.title = "";
  ruleForm.intro = "";
}

async function addData() {
  try {
    await addModel(ruleForm);

    listData.value.push({ title: ruleForm.title, intro: ruleForm.intro });

    ElMessage({ type: "success", message: "New model created!" });
    showAddModule.value = false;

    console.log("New model added!");
    console.table(ruleForm);
    clearRuleForm();
  } catch (err) {
    ElMessage({ type: "error", message: "Something went wrong!" });
    clearRuleForm();
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
            @click="resetData"
            type="danger"
            :disabled="
              ruleForm.title.length === 0 && ruleForm.intro.length === 0
            "
            >clear
          </el-button>

          <el-button
            @click="addData"
            type="success"
            :disabled="
              ruleForm.title.length === 0 || ruleForm.intro.length === 0
            "
            >add</el-button
          >
        </div>
      </div>
    </el-form-item>
  </el-form>
</template>
