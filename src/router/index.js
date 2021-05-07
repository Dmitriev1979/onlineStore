import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Product from '@/components/Products/Product.vue'
import NewProduct from '@/components/Products/NewProduct.vue'
import ProductList from '@/components/Products/ProductList.vue'
import Checkout from '@/components/User/Checkout.vue'
import Login from '@/components/Auth/Login.vue'
import Register from '@/components/Auth/Register.vue'
import fb from 'firebase'


Vue.use(Router)

const router = new Router({
   routes: [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    props: true,
    name: 'product',
    component: Product
  },
  {
    path: '/list',
    name: 'list',
    component: ProductList,
    meta:{
      auth: true
    }
  },
   {
    path: '/new',
    name: 'new',
    component: NewProduct,
    meta:{
      auth: true
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
    meta:{
      auth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },

],
mode: 'history'
})

 router.beforeEach((to, from, next)=>{
   const requiresAuth = to.matched.some(x => x.meta.auth)
   const currentUser = fb.auth().currentUser
   if(requiresAuth && !currentUser){
     next('/login?loginError=true')
   }else if(requiresAuth && currentUser){
    next()
  }else{
    next()
  }
})
export default router
