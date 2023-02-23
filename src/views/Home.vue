<script lang="ts" setup>
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";

import OverView from "@/components/OverView.vue";
import ModuleManagement from "./ModuleManagement.vue";

import { useHome } from "@/stores/index";
import { storeToRefs } from "pinia";

const store = useHome();
const { moduleIndex } = storeToRefs(store);

const modules = [OverView, ModuleManagement];
let showingModule = shallowRef(modules[moduleIndex.value]);

watch(moduleIndex, () => {
  showingModule.value = modules[moduleIndex.value];
});
</script>

<template>
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
            <component :is="showingModule"></component>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}

.el-main {
  overflow: hidden !important;
}
</style>
