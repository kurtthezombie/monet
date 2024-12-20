import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GreetingView from '@/views/GreetingView.vue'
import LetterView from '@/views/LetterView.vue'
import PictureView from '@/views/PictureView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/greetings',
      name: 'greetings',
      component: GreetingView,
    },
    {
      path: '/letter',
      name: 'letter',
      component: LetterView,
    },
    {
      path: '/picture',
      name: 'picture',
      component: PictureView
    },
  ],
})

export default router
