<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { cnPhoneCheck } from "@/utils/phoneNumCheck";

const router = useRouter();

const logInInfo = reactive({
  email: "",
  password: "",
});

const ruleFormRef = ref<FormInstance>();

const emailNumCheck = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("Please input email"));
  }

  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if (reg.test(value)) {
    callback();
  } else {
    callback(new Error("Pleace input the correct email"));
  }
};

const rules = reactive<FormRules>({
  email: [
    {
      required: true,
      trigger: "blur",
      validator: emailNumCheck,
    },
  ],
  password: [
    {
      required: true,
      message: "Pleace input password",
      trigger: "blur",
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined): Promise<void> => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    ///    Login success
    if (valid) {
      ElMessage({
        message: "Login successful",
        type: "success",
      });
      console.log("submit!");
      setTimeout(() => {
        router.push("/home/overView");
      }, 500);
    } else {
      ///    Login failed
      ElMessage({
        message: "opps,  seems to be an error logging in",
        type: "error",
      });
      console.log("error submit!", fields);
    }
  });
};
</script>

<template>
  <div class="flex-base">
    <el-form
      ref="ruleFormRef"
      :rules="rules"
      :model="logInInfo"
      class="flex-col-center w-4/12 h-[500px] px-3 py-10 bg-white box-with-shadow rounded-lg"
    >
      <!-- title -->
      <el-form-item class="w-full">
        <h1 class="w-full font-bold text-center text-[2rem]">
          Internet + online service platform
        </h1>
      </el-form-item>
      <!-- email -->
      <el-form-item class="w-full h-[60px] overflow-visible" prop="email">
        <el-input
          v-model="logInInfo.email"
          type="text"
          placeholder="Pleace input email"
          autofocus="true"
          clearable
          class="h-[40px]"
        />
      </el-form-item>
      <!-- password -->
      <el-form-item class="w-full h-[60px] overflow-visible" prop="password">
        <el-input
          v-model="logInInfo.password"
          placeholder="Pleace input password"
          type="password"
          clearable
          class="h-[40px]"
        />
      </el-form-item>

      <el-divider direction="horizontal" />

      <!-- submit -->
      <el-form-item class="w-full h-[60px] mb-0">
        <el-button @click="submitForm(ruleFormRef)" class="w-full h-full">
          <div class="text-2xl">Log In</div>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss">
@use "@/scss/index.scss";

.flex-base {
  min-height: 100vh;
}

h1 {
  color: var(--font-color-primary);
}

.el-input {
  font-size: 1.5rem !important;
}
.el-form-item__error {
  font-size: 1.3rem !important;
}

///    show form check error
///    whitch is an overflow div
.el-form-item__content {
  overflow: visible;
}

///    disable increcment when type is number
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
