import { createRouter, createWebHistory } from 'vue-router'
import LogInVue from '@/views/LogIn.vue';
import Home from '@/views/Home.vue';

import OverViewVue from '@/components/OverView.vue';
import ModuleManagementVue from '@/components/ModuleManagement.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LogIn",
      component: LogInVue,
    },
    {
      path: "/home/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "overView",
          name: "overView",
          component: OverViewVue
        },
        {
          path: "moduleManagement",
          name: "moduleManagement",
          component: ModuleManagementVue
        },
      ]
    }
  ]
})

export default router
