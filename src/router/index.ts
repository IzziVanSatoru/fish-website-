import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Cart from '../pages/Cart.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/cart', component: Cart } // Menambahkan rute untuk Cart
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
