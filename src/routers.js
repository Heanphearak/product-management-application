import Dashboard from './pages/Dashboard.vue'
import Login from './pages/Login.vue'
import AddNewProducts from './pages/AddNewProducts.vue'
import EditProduct from './pages/EditProduct.vue'

export default [
    {
        path: '/',
        component: Dashboard,
        name: 'dashboard'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path:'/products',
        component: AddNewProducts,
        name: 'products',
    
    },
    {
        path:'/edit-products/:id',
        component: EditProduct,
        name: 'edit-product',
        props: true,
    }
]