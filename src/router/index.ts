import { createRouter, createWebHistory } from "vue-router";

import OverView from "@/components/OverView.vue";
import ModuleManagement from "@/components/ModuleManagement.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LogIn",
      component: () => import("@/views/LogIn.vue"),
    },
    {
      path: "/home/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
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
