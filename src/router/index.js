import { createRouter, createWebHistory } from 'vue-router'
import LudoView from '../views/LudoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/ludoth-que'
    },
    {
      path: '/ludoth-que',
      name: 'Ludothèque',
      component: () => import('../views/LudoView.vue')
    },
    {
      path: '/petites-fiches-techniques',
      name: 'Petites Fiches Technique',
      component: () => import('../views/TipsView.vue')
    },
  ]
})

export default router
