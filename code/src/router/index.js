import { createRouter, createWebHistory } from 'vue-router';
import register from '../components/register.vue';
import login from '../components/login.vue';
import welcome from '../components/welcome.vue';
import compare from '../components/compare.vue';
const routes = [
     {
          path: '/',
          name: 'home',
          component: welcome,
     },
     {
          path: '/register',
          name: 'register',
          component: register,
     },
     {
          path: '/login',
          name: 'login',
          component: login,
     },
     {
          path: '/welcome',
          name: 'welcome',
          component: welcome,
     },
     {
          path: '/compare',
          name: 'compare',
          component: compare,
     },
];

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes,
});

export default router;
