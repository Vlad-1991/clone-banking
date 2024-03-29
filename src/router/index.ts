import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import {useAuthStore} from "@/stores/AuthUserStore";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/request/:id',
    name: 'Request',
    component: () => import('../views/Request.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const AuthStore = useAuthStore()
  const requireAuth = to.meta.auth

  if(requireAuth && AuthStore.isAuthentificated){
    next()
  }else if(requireAuth && !AuthStore.isAuthentificated){
    next('/auth?message=auth')
  }else{
    next()
  }
})

export default router
