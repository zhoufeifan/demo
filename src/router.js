import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RedPacket from './views/RedPacket.vue'
import Demo from './views/Demo.vue'
import Demo1 from './views/Demo1.vue'
import MoveDirection from './views/MoveDirection.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/redPacket',
      name: 'redPacket',
      component: RedPacket
    },{
      path: '/moveDirection',
      name: 'moveDirection',
      component: MoveDirection
    },{
      path: '/demo/:id',
      name: 'demo',
      component: Demo,
      meta: {keepAlive: true}
    },{
      path: '/demo1',
      name: 'demo1',
      component: Demo1,
      meta: {keepAlive: false}
    }]
})
