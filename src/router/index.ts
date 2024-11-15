import { createRouter, createWebHistory } from 'vue-router';

export const constantRoutes = [
    {
        path: '/role',
        name: 'Role',
        component: () => import('@/views/system/role.vue'),
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('@/views/system/user.vue'),
    },
];

const router = createRouter({
    history: createWebHistory("/qiankun-vue-system"),
    routes: constantRoutes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

export default router;
