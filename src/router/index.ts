import { createRouter, createWebHistory } from 'vue-router'
import LogInVue from '@/views/LogIn.vue';
import Home from '@/views/Home.vue';

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
    }
  ]
})

export default router
