import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Skills from '../views/Skills'
import Experience from '../views/Experience'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
