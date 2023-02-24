<template>
  <div class="w-full h-full pt-4 flex flex-row justify-between">
    <!-- module edit area -->
    <div class="w-1/2 h-full flex justify-start items-center pl-2">
      <i-ep-Document class="mx-3 text-xl opacity-40 cursor-pointer" />
      <i-ep-Delete class="mx-3 text-xl opacity-40 cursor-pointer" />
    </div>
    <!-- module add button -->
    <div class="flex justify-center items-center pr-5">
      <el-button class="mr-8 w-20">添加</el-button>
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
