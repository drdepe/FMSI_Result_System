import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import CurrentResult from '../views/CurrentResult'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/current_result',
    name: 'CurrentResult',
    component: CurrentResult
  },

]

const router = new VueRouter({
  routes
})

export default router
