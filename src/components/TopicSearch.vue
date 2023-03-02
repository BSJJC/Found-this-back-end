<script lang="ts" setup>
import getTopicList from "@/api/getTopicList";

getTopicList().then((res) => {
  console.log(res);
});
</script>

<template>
  <div class="w-full h-full grid grid-cols-5 bg-green-300">
    <div class="col-span-4 bg-red-300 flex justify-center items-center"></div>
    <div class="col-span-1 bg-purple-300 flex justify-center items-center">
      <el-button type="primary">Search</el-button>
    </div>
  </div>
</template>
