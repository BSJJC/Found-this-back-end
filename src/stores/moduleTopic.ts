import { defineStore } from "pinia";

export const useModuleTopic = defineStore("moduleTopic", {
  state: () => ({
    showingPageIndex: 1,
  }),
});
