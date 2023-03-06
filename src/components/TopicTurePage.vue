<script lang="ts" setup>
import { useModuleTopic } from "@/stores/index";
import { storeToRefs } from "pinia";
import calcTurePageIndexes from "@/utils/calcTurePageIndexes";

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

function turePage(newIndex: number) {
  showingPageIndex.value = newIndex + 1;
  turePageIndexes.value = calcTurePageIndexes(newIndex + 1, maxPageIndex);
}
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-2/3 h-full grid grid-cols-5">
      <!-- left ture page -->
      <div class="col-span-1 flex justify-end items-center">
        <el-button
          class="mx-1"
          :disabled="showingPageIndex - 1 > 0 ? false : true"
          @click="turePage(showingPageIndex)"
        >
          <IEpArrowLeft />
        </el-button>

        <div class="flex justify-center items-center mx-1">
          <transition name="fade-right">
            <el-button
              class="mx-1"
              v-show="showingPageIndex - 5 > 0"
              @click="turePage(0)"
              >1</el-button
            >
          </transition>
          <transition name="fade-right">
            <div class="mx-1 text-center" v-show="showingPageIndex - 5 > 0">
              ...
            </div>
          </transition>
        </div>
      </div>

      <!-- ture page indexes -->
      <div class="col-span-3 flex justify-between items-center">
        <div v-for="(i, index) in turePageIndexes" :key="index">
          <el-button
            class="mx-1"
            :type="i === showingPageIndex ? 'primary' : ''"
            @click="turePage(i - 1)"
          >
            {{ i }}
          </el-button>
        </div>
      </div>

      <!-- right ture page -->
      <div class="col-span-1 flex justify-start items-center">
        <div class="flex justify-center items-center">
          <div class="mx-1">...</div>
          <el-button class="mx-1" @click="turePage(maxPageIndex - 1)">{{
            maxPageIndex
          }}</el-button>
        </div>
        <el-button class="mx-1" @click="turePage(showingPageIndex)">
          <IEpArrowRight />
        </el-button>
      </div>
    </div>

    <!-- <el-button
      class="mr-1"
      :disabled="showingPageIndex - 1 > 0 ? false : true"
      @click="showingPageIndex--"
    >
      <IEpArrowLeft />
    </el-button>

    <div class="mx-1">
      <div
        class="flex justify-center items-center w-16"
        v-show="showingPageIndex - 5 > 0"
      >
        <el-button class="mx-1" @click="turePage(0)">1</el-button>
        <div class="mx-1">...</div>
      </div>
    </div>

    <div v-for="(i, index) in turePageIndexes" :key="index">
      <el-button
        class="mx-1"
        :type="i === showingPageIndex ? 'primary' : ''"
        @click="turePage(i - 1)"
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
    </el-button> -->
  </div>
</template>

<style lang="scss" scoped>
.el-button {
  width: 54px !important;
}
</style>
