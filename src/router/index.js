import { createRouter, createWebHistory } from 'vue-router';
import Cart from '../views/Cart.vue';
import Catalog from '../views/Catalog.vue';
import CardBig from '../views/CradBig.vue';
const routes = [
    {
        path: '/',
        component: Catalog,
    },
    {
        path: '/catalog',
        component: Catalog,
    },
    {
        path: '/catalog/:id',
        component: CardBig,
    },
    {
        path: '/cart',
        component: Cart,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
