<script lang="ts" setup>
import { use } from "echarts/core";
import * as echarts from "echarts";
import VChart from "vue-echarts";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import getRandomArray from "@/utils/getRandomArray";

use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

const option = {
  xAxis: {
    type: "category",
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: getRandomArray(7, 2000),
      type: "line",
      smooth: true,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "rgb(128, 255, 165)",
        },
        {
          offset: 1,
          color: "rgb(1, 191, 236)",
        },
      ]),
    },
  ],
};
</script>

<template>
  <div class="relative w-full h-full">
    <div id="title" class="absolute w-full text-center">搜索次数走势图</div>
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>
