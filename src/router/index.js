import { createRouter, createWebHistory } from 'vue-router'
import Create from '../views/Create.vue'
import Show from '../views/Show.vue'
import ShowId from '../views/ShowId.vue'

const routes = [
  {
    path: '/show',
    name: 'Show',
    component: Show,
    children: [
      {
        path: '/show/:id',
        name: 'ShowId',
        component: ShowId
      }
    ]
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  { path: '/:notFound(.*)', redirect: '/show' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
