import { defineStore } from "pinia";
import type moduleListType from "@/types/moduleListType";

export const useModuleListData = defineStore('moduleListData', {
  state: () => ({
    listData: <moduleListType[]>[],
    selectedModuleIndexes: <number[]>[],
    selectedModuleData: <moduleListType[]>[],
    editingModuleIndex: 0,
    editingModuleData: <moduleListType>{},
  }),
});