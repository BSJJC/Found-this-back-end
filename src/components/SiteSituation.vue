<script lang="ts" setup>
import getSiteSituation from "@/api/getSiteSituation";
import type siteSituationType from "@/types/siteSituationType";

const temp: siteSituationType[] = [];
const data: Ref<siteSituationType[]> = ref(temp);

getSiteSituation().then((res) => {
  data.value = res;
});
</script>

<template>
  <div class="flex flex-row flex-wrap content-around full h-full">
    <div v-for="(i, index) in data ? data : 8" :key="index" class="card">
      <div class="card-inside">
        <div class="col-span-1 flex justify-center">
          <IEpUser class="h-full w-2/6" />
        </div>
        <div class="col-span-1 grid grid-rows-2">
          <div id="title" class="flex justify-center items-end text-xl">
            {{ (i as siteSituationType).title }}
          </div>
          <div
            id="value"
            class="flex justify-center items-start text-3xl font-bold"
          >
            {{ (i as siteSituationType).value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply w-1/4 h-2/5 flex justify-center items-center;
}

@mixin customer-shadow {
  box-sizing: border-box;
  box-shadow: rgba(158, 158, 158, 0.32) 0px 2px 4px 0px,
    rgba(158, 158, 158, 0.32) 0px 2px 16px 0px;
}

.card-inside {
  @apply grid grid-cols-2 w-11/12 h-4/6 rounded-lg;
  @include customer-shadow;
}

#title {
  color: var(--font-color-info);
}

#value {
  color: var(--font-color-primary);
}
</style>
