import Home from './components/Main.vue';
import Bank from './components/Bank.vue';

import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    { path: '/', component: Home },
    { path: '/bank', component: Bank }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router }