<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useModuleListData } from "@/stores/index";
import type editModuleType from "@/types/editModuleType";

const store = useModuleListData();
const { listData, selectedModuleIndexes } = storeToRefs(store);

const temp = <editModuleType>{};
const data: Ref<editModuleType> = ref(temp);

let editingModuleIndex = ref(0);

data.value.title = listData.value[editingModuleIndex.value].title;
data.value.intro = listData.value[editingModuleIndex.value].intro;
</script>

<template>
  <el-form label-width="50px" v-model="data">
    <el-form-item>
      {{ editingModuleIndex + 1 }}
      /
      {{ selectedModuleIndexes.length }}
    </el-form-item>

    <el-form-item label="title:">
      <el-input v-model="data.title" />
    </el-form-item>

    <el-form-item label="intro: ">
      <el-input type="textarea" v-model="data.intro" />
    </el-form-item>

    <el-form-item>
      <div class="w-full h-full p-3 flex flex-row justify-between items-center">
        <div>
          <el-button>pre module</el-button>
          <el-button>next module</el-button>
        </div>
        <div>
          <el-button>discard </el-button>
          <el-button>submit</el-button>
        </div>
      </div>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped></style>
