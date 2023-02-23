<script lang="ts" setup></script>

<template>
  <div class="w-full h-full pt-4 flex flex-row justify-between">
    <!-- module edit area -->
    <div class="w-1/2 h-full flex justify-start items-center">
      <i-ep-Document class="mr-5 text-xl opacity-40" />
      <i-ep-Delete class="mr-5 text-xl opacity-40" />
    </div>
    <!-- module add button -->
    <div>
      <el-button class="w-20">添加</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-button {
  background-color: #3785ea;
  color: white;
  border: none;
  font-size: bold;

  &:hover {
    background-color: #3785ea;
    color: rgb(227, 227, 227);
  }
}
</style>
