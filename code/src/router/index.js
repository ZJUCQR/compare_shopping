import { createRouter, createWebHistory } from 'vue-router';
import register from '../components/register.vue';
import login from '../components/login.vue';
import welcome from '../components/welcome.vue';

const routes = [
     {
          path: '/',
          name: 'home',
          redirect: '/login'
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
];

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes,
});

export default router;
