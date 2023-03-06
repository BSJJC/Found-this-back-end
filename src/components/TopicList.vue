<script lang="ts" setup>
import { useModuleTopic } from "@/stores/index";
import { storeToRefs } from "pinia";

const store = useModuleTopic();
const { showingPageIndex } = storeToRefs(store);

const allData = JSON.parse(sessionStorage.getItem("topicItems") as string);

let data: any = [];

for (
  let i = (showingPageIndex.value - 1) * 10;
  i < 13 * showingPageIndex.value;
  i++
) {
  data.push(allData[i]);
}
</script>

<template>
  <div class="w-full h-full overflow-hidden">
    <el-table :data="data" stripe style="width: 100%">
      <el-table-column
        label="number"
        prop="number"
        width="100px"
        align="center"
      />
      <el-table-column
        label="founder"
        prop="founder"
        width="200px"
        align="center"
      />
      <el-table-column
        label="publish  data"
        prop="startDate"
        width="200px"
        align="center"
      />
      <el-table-column label="title" prop="title" />
      <el-table-column
        label="evaluations"
        prop="evaluationNums"
        width="150px"
        align="center"
      />
      <el-table-column label="delete" width="150px" align="center">
        <template #default="scope">
          <el-button type="danger">delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
* {
  font-size: 1.3rem !important;
}
</style>
