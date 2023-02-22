<script lang="ts" setup></script>

<template>
  <div
    class="w-full h-[70px] grid grid-cols-6 my-3 cursor-pointer z-10"
    v-for="(i, index) in 4"
    :key="index"
  >
    <div
      class="grid-col-2 col-span-2 flex justify-end items-center pr-3 text-lg"
    >
      <i-ep-HomeFilled />
    </div>
    <div
      class="grid-col-4 col-span-4 w-full flex justify-start items-center text-md"
    >
      首页{{ i }}
    </div>
  </div>
</template>
