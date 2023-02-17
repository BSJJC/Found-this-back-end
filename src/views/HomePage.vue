<script lang="ts" setup>
import OverView from "@/components/OverView.vue";
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="flex-base">
    <el-container>
      <el-aside width="150px">
        <side-bar></side-bar>
      </el-aside>
      <el-container>
        <el-header>
          <nav-bar></nav-bar>
        </el-header>
        <el-main>
          <over-view></over-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.el-container {
  height: 100vh;
}
</style>
