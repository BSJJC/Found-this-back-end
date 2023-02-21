<script lang="ts" setup>
const errorHandler = () => true;
</script>

<template>
  <div class="w-full h-full bg-white">
    <div class="w-full h-24 flex justify-center items-center">
      <el-avatar
        class="cursor-pointer"
        :size="70"
        src="https://api.yimian.xyz/img?type=head"
        @error="errorHandler"
      >
        <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
      </el-avatar>
    </div>
    <div class="w-full h-full bg-green-300"></div>
  </div>
</template>
