<script lang="ts" setup>
import TopicSearch from "./TopicSearch.vue";
import TopicList from "./TopicList.vue";
import TopicTurePage from "./TopicTurePage.vue";
</script>

<template>
  <el-container class="bg-white rounded-3xl box-with-shadow">
    <el-header>
      <topic-search></topic-search>
    </el-header>
    <el-main>
      <topic-list></topic-list>
    </el-main>
    <el-footer class="bg-green-300">
      <topic-ture-page></topic-ture-page>
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
.el-container {
  height: 100% !important;

  .el-header {
    padding: 0px !important;
  }
}
</style>
