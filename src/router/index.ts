import { createRouter, createWebHistory } from 'vue-router';

export const constantRoutes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;
