<script lang="ts" setup>
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";
import { cnPhoneCheck } from "@/utils/phoneNumCheck";

const router = useRouter();

const logInInfo = reactive({
  phoneNum: "",
  password: "",
});

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  phoneNum: "",
  password: "",
});

const phoneNumCheck = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("Please input the phone number"));
  }

  const flag = cnPhoneCheck(value);

  if (flag) {
    callback();
  } else {
    callback(new Error("Please input the correct phone number"));
  }
};

const rules = reactive<FormRules>({
  phoneNum: [
    {
      required: true,
      trigger: "blur",
      validator: phoneNumCheck,
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
        router.push({
          name: "HomePage",
        });
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
      class="flex-col-center w-4/12 px-3 py-10 bg-white box-with-shadow"
    >
      <!-- title -->
      <el-form-item class="w-full">
        <h1 class="w-full font-bold text-center text-3xl select-none">
          互联网+在线服务平台
        </h1>
      </el-form-item>
      <!-- phone number -->
      <el-form-item class="w-full overflow-visible" prop="phoneNum">
        <el-input
          v-model="logInInfo.phoneNum"
          type="number"
          placeholder="请输入电话号码"
          autofocus="true"
          clearable
        />
      </el-form-item>
      <!-- password -->
      <el-form-item class="w-full overflow-visible" prop="password">
        <el-input
          v-model="logInInfo.password"
          placeholder="请输入密码"
          type="password"
          clearable
        />
      </el-form-item>

      <el-divider direction="horizontal" />

      <!-- submit -->
      <el-form-item class="w-full mb-0">
        <el-button
          @click="submitForm(ruleFormRef)"
          class="w-full h-10 text-2xl"
        >
          登录
        </el-button>
      </el-form-item>
      <routerLink to="/homePage">homePage</routerLink>
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
