import { createRouter, createWebHistory } from "vue-router";

import LogIn from "@/views/LogIn.vue";
import Home from "@/views/Home.vue";

import OverView from "@/components/OverView.vue";
import ModuleManagement from "@/components/ModuleManagement.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LogIn",
      component: LogIn,
    },
    {
      path: "/home/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "overView",
          name: "overView",
          component: OverView,
        },
        {
          path: "moduleManagement",
          name: "moduleManagement",
          component: ModuleManagement,
        },
      ],
    },
  ],
});

export default router;
