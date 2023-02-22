import { defineStore } from "pinia";

export const useHome = defineStore('home', {
  state: () => ({
    moduleIndex: 0,
  })
})