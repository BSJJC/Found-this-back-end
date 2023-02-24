<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useModuleListData } from "@/stores/index";
import ModuleEdit from "./ModuleEdit.vue";

const store = useModuleListData();
let { listData } = storeToRefs(store);

const editModule = ref(false);
const addModule = ref(false);

const selectedModules = ref([]);

</script>

<template>
  <div class="w-full h-full pt-4 flex flex-row justify-between">
    <!-- module edit area -->
    <div class="w-1/2 h-full flex justify-start items-center pl-2">
      <i-ep-Document
        class="mx-3 text-xl opacity-40 cursor-pointer"
        @click="editModule = true"
      />

      <!-- edit module -->
      <el-dialog v-model="editModule" title="Edit module" width="20%" draggable>
        <module-edit now-title="123" now-intro="abc"></module-edit>
      </el-dialog>

      <i-ep-Delete class="mx-3 text-xl opacity-40 cursor-pointer" />
    </div>
    <!-- module add button -->
    <div class="flex justify-center items-center pr-5">
      <el-button class="mr-8 w-20" @click="addModule = true">添加</el-button>

      <!-- add module -->
      <el-dialog v-model="addModule" title="Add module" width="20%" draggable>
        <module-edit></module-edit>
      </el-dialog>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-button {
  background-color: #3785ea;
  color: white;
  border: none;
  font-size: bold;

  &:hover {
    background-color: #3785ea;
    color: rgb(227, 227, 227);
  }
}
</style>
