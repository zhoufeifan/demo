import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RedPacket from './views/RedPacket.vue'
import Demo from './views/Demo.vue'
import MoveDirection from './views/MoveDirection.vue'
import NumberInput from './views/NumberInput.vue'
import SlideBarList from './views/SlideBarList.vue'
import LazyLoad from './views/LazyLoadPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/red-packet',
      name: 'redPacket',
      component: RedPacket
    },{
      path: '/move-direction',
      name: 'moveDirection',
      component: MoveDirection
    },{
      path: '/demo',
      name: 'demo',
      component: Demo,
    },{
      path: '/number-input',
      name: 'numberInput',
      component: NumberInput,
    },{
      path: '/slide-bar-list',
      name: 'slideBarList',
      component: SlideBarList,
    },{
      path: '/lazyload',
      name: 'LazyLoad',
      component: LazyLoad,
    }
  ]
})
