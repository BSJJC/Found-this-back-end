import LogInVue from '@/views/LogIn.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /// TODO 
    {
      path: "/",
      name: "LogIn",
      component: LogInVue,
    }
  ]
})

export default router
