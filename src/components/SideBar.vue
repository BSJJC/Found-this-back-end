<script lang="ts" setup>
import ModuleSwitch from "./ModuleSwitch.vue";

const errorHandler = () => true;
</script>

<template>
  <div class="w-full h-full bg-white">
    <!-- avater -->
    <div class="w-full h-24 flex justify-center items-center">
      <el-avatar
        class="cursor-pointer"
        :size="70"
        src="http://localhost:5000/api/administratorAvater/641128f008a8d42d758a715d"
        @error="errorHandler"
      >
        <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
      </el-avatar>
    </div>

    <!-- router switch items -->
    <div class="w-full h-full mt-10">
      <module-switch></module-switch>
    </div>
  </div>
</template>
