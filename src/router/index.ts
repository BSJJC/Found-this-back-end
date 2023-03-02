import { createRouter, createWebHistory } from "vue-router";

import LogIn from "@/views/LogIn.vue";
import Home from "@/views/Home.vue";

import OverView from "@/components/OverView.vue";
import ModuleManagement from "@/components/ModuleManagement.vue";
import TopicManagement from "@/components/TopicManagement.vue";

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
        {
          path: "topicManagement",
          name: "topicManagement",
          component: TopicManagement,
        },
      ],
    },
  ],
});

export default router;
