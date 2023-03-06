<script lang="ts" setup>
import { useModuleTopic } from "@/stores/index";
import { storeToRefs } from "pinia";

const store = useModuleTopic();
const { showingPageIndex } = storeToRefs(store);

const data = JSON.parse(sessionStorage.getItem("topicItems") as string);
const maxPageIndex = Math.ceil(data.length / 13);

function turePage(newIndex: number) {
  showingPageIndex.value = newIndex + 1;

  console.log(showingPageIndex.value);
}
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <el-button
      class="mr-1"
      :disabled="showingPageIndex - 1 > 0 ? false : true"
      @click="showingPageIndex--"
    >
      <IEpArrowLeft />
    </el-button>

    <div class="mx-1" v-show="showingPageIndex - 5 > 0">...</div>

    <div v-for="(i, index) in maxPageIndex > 9 ? 9 : maxPageIndex" :key="index">
      <el-button
        class="mx-1"
        :type="i === showingPageIndex ? 'primary' : ''"
        @click="turePage(index)"
      >
        {{ i }}
      </el-button>
    </div>

    <div class="mx-1" v-show="showingPageIndex + 10 < maxPageIndex">...</div>

    <el-button class="ml-1" @click="showingPageIndex++">
      <IEpArrowRight />
    </el-button>
  </div>
</template>
