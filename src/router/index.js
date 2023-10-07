import { createRouter, createWebHistory } from 'vue-router';
import StockDataTable from '../components/StockDataTable.vue';
import ProductDetails from '../components/ProductDetails.vue';

const routes = [
    {
        path: '/',
        name: 'StockDataTable',
        component: StockDataTable,
    },
    {
        path: '/products/:id',
        name: 'ProductDetails',
        component: ProductDetails,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
