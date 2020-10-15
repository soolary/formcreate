import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import wj from '@/views/Wj.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/wj',
    name: 'wj',
    component: wj
  }

]

const router = new VueRouter({
  routes
})

export default router
