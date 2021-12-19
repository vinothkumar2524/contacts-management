import { createRouter, createWebHashHistory } from 'vue-router'
import ContactsContainer from '../views/ContactsContainer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ContactsContainer
  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes
})

export default router
