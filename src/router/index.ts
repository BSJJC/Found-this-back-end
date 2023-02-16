import TheTest from '@/views/TheTest.vue';
import LogInVue from '@/views/LogIn.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LogIn",
      component: LogInVue,
    },
    {
      path: "/test",
      name: "theTest",
      component: TheTest,
    },
  ]
})

export default router
