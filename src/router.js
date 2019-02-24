import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RedPacket from './views/RedPacket.vue'
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
    }]
})
