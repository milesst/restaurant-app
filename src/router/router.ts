import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', alias: '/home', component: () => import('../views/MenuView.vue') },
  { path: '/cart', component: () => import('../views/CartView.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;