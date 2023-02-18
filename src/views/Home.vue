<script lang="ts" setup>
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";

import OverView from "@/components/OverView.vue";

let showingModule = shallowRef(OverView);
</script>

<template>
  <div class="flex-base">
    <el-container>
      <el-aside width="200px">
        <side-bar></side-bar>
      </el-aside>
      <el-container>
        <el-header>
          <nav-bar></nav-bar>
        </el-header>
        <el-main>
          <router-view>
            <transition name="fade">
              <Component :is="showingModule"></Component>
            </transition>
          </router-view>
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
