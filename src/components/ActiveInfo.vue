<script lang="ts" setup>
import getActiveInfo from "@/api/getActiveInfo";
import type activeInfoType from "@/types/activeInfoType";

const temp: activeInfoType[] = [];
const data: Ref<activeInfoType[]> = ref(temp);

getActiveInfo().then((res) => {
  data.value = res;
});
</script>

<template>
  <el-scrollbar height="100%">
    <el-table :data="data">
      <el-table-column prop="number" label="序号" sortable />
      <el-table-column prop="userName" label="用户名" sortable />
      <el-table-column prop="IP" label="登录IP" sortable />
      <el-table-column prop="onlineTime" label="在线时长" sortable />
    </el-table>
  </el-scrollbar>
</template>
