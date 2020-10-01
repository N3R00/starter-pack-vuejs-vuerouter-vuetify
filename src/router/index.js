import Vue from 'vue'
import VueRouter from 'vue-router'

// LAYOUTS
import HomeLayout from '../layouts/HomeLayout.vue'

// VIEWS
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    component: HomeLayout, 
    children: [
      { 
        path: '/', 
        component: Home
      },
      { 
        path: '/home', 
        component: Home
      },

    ] 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
