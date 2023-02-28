import { defineStore } from "pinia";
import type moduleListType from "@/types/moduleListType";

export const useModuleListData = defineStore("moduleListData", {
  state: () => ({
    showEditModule: false,
    showAddModule: false,

    listData: <moduleListType[]>[],
    selectedModuleIndexes: <number[]>[],
    selectedModuleData: <moduleListType[]>[],
    editingModuleIndex: 0,
    editingModuleData: <moduleListType>{},
    checkboxGroup: <number[]>[],

    dataChanged: false,
  }),

  actions: {
    initSelectedModuleData() {
      this.selectedModuleData = [];

      for (let i = 0; i < this.selectedModuleIndexes.length; i++) {
        const title = this.listData[this.selectedModuleIndexes[i]].title;
        const intro = this.listData[this.selectedModuleIndexes[i]].intro;

        this.selectedModuleData.push({ title, intro });
      }
    },
  },
});
