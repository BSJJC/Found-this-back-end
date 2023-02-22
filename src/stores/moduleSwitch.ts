import { defineStore } from "pinia";

export const useModuleSwitch = defineStore('moduleSwitch', {
  state: () => ({
    hoverIndex: 0,
    selectedIndex: 0
  })
})