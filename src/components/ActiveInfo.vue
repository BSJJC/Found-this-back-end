<script lang="ts" setup>
import getActiveInfo from "@/api/getActiveInfo";

getActiveInfo().then((res) => {
  console.log(res);
});

interface User {
  number: string;
  userName: string;
  IP: string;
  onlineTime: string;
}

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User;
  rowIndex: number;
}) => {
  if (rowIndex === 1) {
    return "warning-row";
  } else if (rowIndex === 3) {
    return "success-row";
  }
  return "";
};

const tableData: User[] = [
  {
    number: "0",
    userName: "Tom",
    IP: "sdasdaasd",
    onlineTime: "123",
  },
  {
    number: "0",
    userName: "Tom",
    IP: "sdasdaasd",
    onlineTime: "123",
  },
  {
    number: "0",
    userName: "Tom",
    IP: "sdasdaasd",
    onlineTime: "123",
  },
  {
    number: "0",
    userName: "Tom",
    IP: "sdasdaasd",
    onlineTime: "123",
  },
  {
    number: "0",
    userName: "Tom",
    IP: "sdasdaasd",
    onlineTime: "123",
  },
  {
    number: "0",
    userName: "Tom",
    IP: "sdasdaasd",
    onlineTime: "123",
  },
  {
    number: "0",
    userName: "Tom",
    IP: "sdasdaasd",
    onlineTime: "123",
  },
  {
    number: "0",
    userName: "Tom",
    IP: "sdasdaasd",
    onlineTime: "123",
  },
  {
    number: "0",
    userName: "Tom",
    IP: "sdasdaasd",
    onlineTime: "123",
  },
  {
    number: "0",
    userName: "Tom",
    IP: "sdasdaasd",
    onlineTime: "123",
  },
];
</script>

<template>
  <el-scrollbar height="100%">
    <el-table :data="tableData" :row-class-name="tableRowClassName">
      <el-table-column prop="number" label="number" />
      <el-table-column prop="userName" label="name" />
      <el-table-column prop="IP" label="IP" />
      <el-table-column prop="onlineTime" label="online time" />
    </el-table>
  </el-scrollbar>
</template>

<style lang="scss">
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
