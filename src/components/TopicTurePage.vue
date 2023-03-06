<script lang="ts" setup>
import { useModuleTopic } from "@/stores/index";
import { storeToRefs } from "pinia";

const store = useModuleTopic();
const { showingPageIndex } = storeToRefs(store);

const data = JSON.parse(sessionStorage.getItem("topicItems") as string);
const temp: number[] = [];
const turePageIndexes: Ref<number[]> = ref(temp);
const maxPageIndex = Math.ceil(data.length / 13);

maxPageIndex > 9
  ? (turePageIndexes.value = [1, 2, 3, 4, 5, 6, 7, 8, 9])
  : (turePageIndexes.value = (() => {
      const arr = [];
      for (let i = 0; i < maxPageIndex; i++) {
        arr.push(i);
      }
      return arr;
    })());

function calcTurePageIndexes(newIndex: number) {}

function turePage(newIndex: number) {
  showingPageIndex.value = newIndex + 1;
  calcTurePageIndexes(newIndex + 1);
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

    <div class="mx-1 flex jucen items-center" v-show="showingPageIndex - 5 > 0">
      <el-button class="mx-1" @click="turePage(0)">1</el-button>
      <div class="mx-1">...</div>
    </div>

    <div
      v-for="(i, index) in maxPageIndex > 9 ? 9 : maxPageIndex + 1"
      :key="index"
    >
      <el-button
        class="mx-1"
        :type="i === showingPageIndex ? 'primary' : ''"
        @click="turePage(index)"
      >
        {{ i }}
      </el-button>
    </div>

    <div
      class="mx-1 flex justify-center items-center"
      v-show="showingPageIndex + 10 < maxPageIndex"
    >
      <div class="mx-1">...</div>
      <el-button class="mx-1" @click="turePage(maxPageIndex - 1)">{{
        maxPageIndex
      }}</el-button>
    </div>

    <el-button class="ml-1" @click="showingPageIndex++">
      <IEpArrowRight />
    </el-button>
  </div>
</template>
