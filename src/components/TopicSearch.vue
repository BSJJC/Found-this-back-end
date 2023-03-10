<script lang="ts" setup>
import getTopicList from "@/mockApi/getTopicList";
import type topicType from "@/types/topicType";

const temp: topicType[] = [];
const data: Ref<topicType[]> = ref(temp);

getTopicList().then((res) => {
  data.value = res;
  sessionStorage.setItem("topicItems", JSON.stringify(data.value));
});

const searchOption = reactive({
  module: "",
  founder: "",
  topic: "",
  date: [],
});
</script>

<template>
  <div class="w-full h-full grid grid-cols-5">
    <div class="col-span-4 grid grid-cols-5 grid-flow-col p-3">
      <!-- module -->
      <div class="col-span-1 flex justify-center items-center">
        <el-select
          v-model="searchOption.module"
          placeholder="Select module"
          class="w-full px-2"
        >
          <el-option
            v-for="item in data"
            :key="data.indexOf(item)"
            :label="item.title"
            :value="item.title"
          />
        </el-select>
      </div>

      <!-- founder -->
      <div class="col-span-1 flex justify-center items-center">
        <el-select
          v-model="searchOption.founder"
          placeholder="Select module"
          class="w-full px-2"
        >
          <el-option
            v-for="item in data"
            :key="data.indexOf(item)"
            :label="item.founder"
            :value="item.founder"
          />
        </el-select>
      </div>

      <!--  date -->
      <div class="col-span-2 flex justify-center items-center px-2">
        <el-date-picker
          v-model="searchOption.date"
          type="datetimerange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          value-format="YYYY MM DD"
          class="w-full px-2 scale-y-125"
        />
      </div>

      <!-- title -->
      <div class="col-span-1 flex justify-center items-center px-2">
        <el-input
          v-model="searchOption.topic"
          placeholder="input topic"
          class="w-full px-2"
        />
      </div>
    </div>

    <div class="col-span-1 flex justify-center items-center">
      <el-button type="primary">Search</el-button>
    </div>
  </div>
</template>

<style lang="scss">

</style>
