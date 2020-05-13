import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/home/Home.vue'

const routes: any = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Recommend',
        component: () => import(/* webpackChunkName: "recommend" */ '../views/home/recommend/recommend.vue'),
        meta: {
          index: 1,
          keepAlive:true
        }
      },
      {
        path: 'attention',
        name: 'Attention',
        component: () => import(/* webpackChunkName: "attention" */ '../views/home/attention/attention.vue'),
        meta: {
          index: 0,
          keepAlive:true
        }
      },
      {
        path: 'hotList',
        name: 'HotList',
        component: () => import(/* webpackChunkName: "hostList" */ '../views/home/hotList/hotList.vue'),
        meta: {
          index: 2,
          keepAlive:true
        }
      },
      {
        path: 'pneumonia',
        name: 'Pneumonia',
        component: () => import(/* webpackChunkName: "pneumonia" */ '../views/home/pneumonia/pneumonia.vue'),
        meta: {
          index: 4,
          keepAlive:false
        }
      }
    ]
  },
  {
    path: '/vip',
    name: 'Vip',
    component: () => import(/* webpackChunkName: "vip" */ '../views/vip/vip.vue'),
  },
  {
    path: '/self',
    name: 'Self',
    component: () => import(/* webpackChunkName: "self" */ '../views/self/self.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
