<script lang="ts" setup></script>

<template>
  <div class="w-full h-full pt-0">
    <div class="w-full h-full p-4 pt-0">
      <el-scrollbar class="pr-3">
        <div
          class="w-full h-12 mb-4 flex justify-center items-center border-2 border-gray-200 rounded-lg"
          v-for="(i, index) in 40"
          :key="index"
        >
          <el-checkbox class="w-full pl-4">
            <div class="w-full flex flex-row text-xl">
              <div class="w-64 ml-4 truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt ipsa architecto possimus asperiores sapiente quisquam
                excepturi qui ipsam quibusdam aut cum eligendi est ut in
                corrupti, laborum consectetur voluptas similique.
              </div>
              <div class="w-full ml-10 truncate">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                necessitatibus voluptates minus ipsum cupiditate perferendis
                reprehenderit at, beatae fuga repellat eos ab, temporibus cumque
                possimus, ut molestias quod quaerat est!
              </div>
            </div>
          </el-checkbox>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss">
.el-checkbox__input {
  transform: scale(1.6);
}

.el-checkbox__label {
  width: 100%;
}
</style>
