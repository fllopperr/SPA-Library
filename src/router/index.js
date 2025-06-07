import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import Detalis from '../pages/Detalis.vue'



const routes = [
  { path: '/',
     component: Home 
  },
  { path: '/catalog', 
    component: Catalog 
  },
  { path: '/details/:id', 
    component: Detalis,
    props: true 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router