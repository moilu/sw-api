import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie-details/:id',
    name: 'MovieDetails',
    component: () => import(/* webpackChunkName: "MovieDetails" */ '@/pages/MovieDetails.vue'),
  },
  {
    path: '/character-details/:id',
    name: 'CharacterDetails',
    component: () => import(/* webpackChunkName: "CharacterDetails" */ '@/pages/CharacterDetails.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
