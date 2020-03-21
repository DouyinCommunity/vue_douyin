import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Index from '@/views/index/Index'
import Follow from '@/views/follow/Index'
import VideoList from '@/components/index/VideoList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'index',
        name: 'Index',
        component: Index,
        children: [
          {
            path: '/',
            name: 'VideoList',
            component: VideoList
          }
        ]
      },
      {
        path: 'follow',
        name: 'Follow',
        component: Follow
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
