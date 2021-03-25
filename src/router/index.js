import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/tab2',
    component: () => import('@/views/tab2.vue')
  },
  {
    path: '/tab3',
    component: () => import('@/views/tab3.vue')
  },
  {
    path: '/anime',
    component: () => import('@/views/anime.vue')
  },
  {
    path: '/comics',
    component: () => import('@/views/comics.vue')
  },
  {
    path: '/otro/ciencia',
    component: () => import('@/views/otro/ciencia.vue')
  },
  {
    path: '/otro/tec',
    component: () => import('@/views/otro/tec.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
