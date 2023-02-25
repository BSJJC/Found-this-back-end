<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useModuleListData } from "@/stores/index";
import type editModuleType from "@/types/editModuleType";

const store = useModuleListData();
const { listData, selectedModuleIndexes } = storeToRefs(store);

const temp = <editModuleType>{};
const data: Ref<editModuleType> = ref(temp);

let editingModuleIndex = ref(0);
</script>

<template>
  <el-form label-width="50px" v-model="data">
    <el-form-item label="title:">
      <el-input v-model="data.title" />
    </el-form-item>

    <el-form-item label="intro: ">
      <el-input type="textarea" v-model="data.intro" />
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped></style>
