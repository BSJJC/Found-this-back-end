<script lang="ts" setup>
import { reactive } from "vue";

const logInInfo = reactive({
  phoneNum: "",
  password: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<template>
  <div class="flex-base">
    <el-form
      :model="logInInfo"
      class="flex-col-center w-2/6 px-3 py-10 bg-white box-with-shadow"
    >
      <!-- title -->
      <el-form-item class="w-full">
        <h1 class="w-full font-bold text-center text-3xl">
          互联网+在线服务平台
        </h1>
      </el-form-item>
      <!-- phone number -->
      <el-form-item class="w-full">
        <el-input
          v-model="logInInfo.phoneNum"
          type="number"
          min="0"
          placeholder="请输入电话号码"
          clearable
        />
      </el-form-item>
      <!-- password -->
      <el-form-item class="w-full">
        <el-input
          v-model="logInInfo.password"
          placeholder="请输入密码"
          type="password"
          clearable
        />
      </el-form-item>

      <el-divider direction="horizontal" />

      <!-- submit -->
      <el-button @click="onSubmit" class="w-full"> 登录 </el-button>
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

button {
  background-color: var(--btn-color-primary);
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
