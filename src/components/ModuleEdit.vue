<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useModuleListData } from "@/stores/index";
import type editModuleType from "@/types/editModuleType";

const store = useModuleListData();
const {
  listData,
  selectedModuleIndexes,
  editingModuleIndex,
  editingModuleData,
} = storeToRefs(store);

function disablePreBtm() {
  if (editingModuleIndex.value !== 0) {
    return true;
  } else {
    return false;
  }
}

function disableNextBtn() {
  if (editingModuleIndex.value < selectedModuleIndexes.value.length - 1) {
    return true;
  } else {
    return false;
  }
}

function changeEditingData() {
  editingModuleData.value.title =
    listData.value[selectedModuleIndexes.value[editingModuleIndex.value]].title;
  editingModuleData.value.intro =
    listData.value[selectedModuleIndexes.value[editingModuleIndex.value]].intro;
}

watch(editingModuleIndex, () => {
  changeEditingData();
});

changeEditingData();
</script>

<template>
  <el-form label-width="50px" v-model="editingModuleData">
    <el-form-item>
      {{ editingModuleIndex + 1 }}
      /
      {{ selectedModuleIndexes.length }}
    </el-form-item>

    <el-form-item label="title:">
      <el-input v-model="editingModuleData.title" />
    </el-form-item>

    <el-form-item label="intro: ">
      <el-input type="textarea" v-model="editingModuleData.intro" :rows="2" />
    </el-form-item>

    <el-form-item>
      <div class="w-full h-full p-3 flex flex-row justify-between items-center">
        <div>
          <el-button v-show="disablePreBtm()" @click="editingModuleIndex--"
            >pre module</el-button
          >
          <el-button v-show="!disablePreBtm()" disabled>pre module</el-button>

          <el-button v-show="disableNextBtn()" @click="editingModuleIndex++"
            >next module</el-button
          >
          <el-button v-show="!disableNextBtn()" disabled>next module</el-button>
        </div>

        <div>
          <el-button>discard </el-button>
          <el-button>submit</el-button>
        </div>
      </div>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.el-button {
  margin-left: 0px !important;
  margin-right: 1rem !important;
}
</style>
