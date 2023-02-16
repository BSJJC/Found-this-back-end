import { createRouter, createWebHistory } from 'vue-router'
import TheTest from '@/views/TheTest.vue';
import LogInVue from '@/views/LogIn.vue';
import HomePage from '@/views/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LogIn",
      component: LogInVue,
    },
    {
      path: "/homePage",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/test",
      name: "theTest",
      component: TheTest,
    },
  ]
})

export default router
