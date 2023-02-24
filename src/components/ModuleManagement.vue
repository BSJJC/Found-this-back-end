<script lang="ts" setup>
import ModuleControl from "@/components/ModuleControl.vue";
import ModuleList from "@/components/ModuleList.vue";
</script>

<template>
  <el-container class="bg-white rounded-3xl">
    <el-header>
      <module-control></module-control>
    </el-header>
    <el-main>
      <module-list></module-list>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.el-container {
  height: 100% !important;
}

.el-main {
  padding-top: 0px;
}
</style>
