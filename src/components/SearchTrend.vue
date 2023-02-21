<script lang="ts" setup>
import { use } from "echarts/core";
import * as echarts from "echarts";
import VChart from "vue-echarts";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

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
      data: [820, 932, 901, 934, 1290, 1330, 1320],
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
  <v-chart class="chart" :option="option" autoresize />
</template>
