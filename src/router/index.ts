import { createRouter, createWebHistory } from 'vue-router'
import TheTest from '@/views/TheTest.vue';
import LogInVue from '@/views/LogIn.vue';
import Home from '@/views/Home.vue';
import ModuleManagement from '@/views/ModuleManagement.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LogIn",
      component: LogInVue,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/test",
      name: "theTest",
      component: TheTest,
    },
  ]
})

export default router
