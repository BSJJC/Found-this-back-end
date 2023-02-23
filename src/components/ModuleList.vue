<script lang="ts" setup></script>

<template>
  <div class="w-full h-full">
    <el-scrollbar height="100%">
      <div
        class="w-[calc(100%-10px)] h-14 my-4 px-4 border-2 rounded-md cursor-pointer border-gray-300"
        v-for="(i, index) in 100"
        :key="index"
      >
        <div class="w-full h-full flex flex-row">
          <div class="w-[250px] flex h-full justify-start items-center pl-4">
            <el-checkbox :v-model="i" />
            <div class="flex justify-start items-center h-full w-[150px] ml-4">
              <div class="text-lg truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, eius dignissimos. Perspiciatis quod unde eligendi
                quae porro, nemo, praesentium possimus veniam aperiam dolores
                cum ex velit! Ullam facilis aspernatur necessitatibus.
              </div>
            </div>
          </div>
          <div
            class="w-[calc(100%-250px)] h-ull flex justify-start items-center"
          >
            <div class="text-xl truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              architecto molestias debitis illo, accusamus aliquid illum amet
              voluptatem blanditiis, ratione, vero nostrum eveniet nobis rem
              voluptas consequatur esse repudiandae ab.
            </div>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.el-checkbox {
  transform: scale(1.6);
}
</style>
