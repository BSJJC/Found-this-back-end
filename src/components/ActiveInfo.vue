<script lang="ts" setup>
import getActiveInfo from "@/mockApi/getActiveInfo";
import type activeInfoType from "@/types/activeInfoType";

const temp: activeInfoType[] = [];
const data: Ref<activeInfoType[]> = ref(temp);

getActiveInfo().then((res) => {
  data.value = res;
});
</script>

<template>
  <div class="w-full h-full pr-4">
    <div id="title" class="w-full text-center">活跃人员信息</div>
    <el-table :data="data" stripe height="89%">
      <el-table-column prop="number" label="序号" sortable />
      <el-table-column prop="userName" label="用户名" sortable />
      <el-table-column prop="IP" label="登录IP" sortable />
      <el-table-column prop="onlineTime" label="在线时长" sortable />
    </el-table>
  </div>
</template>
