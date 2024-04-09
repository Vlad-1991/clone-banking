import {createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, Router} from 'vue-router'
import Home from '../views/Home.vue'
import {useAuthStore} from "@/stores/AuthUserStore";
import MainLayout from "@/layout/MainLayout.vue";
import AuthLayout from "@/layout/AuthLayout.vue";
import PageNotFound from "@/views/PageNotFound.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: MainLayout,
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
    meta: {
      layout: MainLayout,
      auth: true
    }
  },
  {
    path: '/request/:id',
    name: 'Request',
    component: () => import('../views/Request.vue'),
    meta: {
      layout: MainLayout,
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    meta: {
      layout: AuthLayout,
      auth: false
    }
  },
  {
    path: '/:any(.*)',
    name: 'PageNotFound',
    component: PageNotFound,
    meta: {
      layout: MainLayout,
      auth: true
    }
  }
]

const router: Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: 'active'
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): void => {
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
