import { defineStore } from "pinia";

export const useModuleSwitch = defineStore('moduleSwitch', {
  state: () => ({
    hoverIndex: 0,
    selectedIndex: 0,
    pages: [
      {
        name: "首页",
        path: "/home"
      },
      {
        name: "话题管理"
      },
      {
        name: "用户管理"
      },
    ]
  })
})