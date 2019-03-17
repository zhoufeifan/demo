import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RedPacket from './views/RedPacket.vue'
import Demo from './views/Demo.vue'
import MoveDirection from './views/MoveDirection.vue'
import NumberInput from './views/NumberInput.vue'
import SlideBarList from './views/SlideBarList.vue'

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
      path: '/movedirection',
      name: 'moveDirection',
      component: MoveDirection
    },{
      path: '/demo',
      name: 'demo',
      component: Demo,
    },{
      path: '/numberinput',
      name: 'numberInput',
      component: NumberInput,
    },{
      path: '/slideBarList',
      name: 'slideBarList',
      component: SlideBarList,
    }]
})
