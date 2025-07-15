import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ludoth-que',
      name: 'Ludothèque',
      component: () => import('../views/LudoView.vue')
    },
    {
      path: '/petites-fiches',
      name: 'Petites Fiches',
      component: () => import('../views/TipsView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
