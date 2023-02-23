<script lang="ts" setup>
import ModuleControl from "@/components/ModuleControl.vue";
import ModuleList from "@/components/ModuleList.vue";
</script>

<template>
  <div
    class="h-full w-full grid grid-rows-2 box-with-shadow rounded-2xl bg-white"
  >
    <div class="common-layout">
      <el-container>
        <el-header>
          <module-control></module-control>
        </el-header>
        <el-main>
          <module-list></module-list>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<style lang="scss"></style>
