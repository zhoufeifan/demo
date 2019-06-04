import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RedPacket from './views/RedPacket.vue'
import Demo from './views/Demo.vue'
import MoveDirection from './views/MoveDirection.vue'
import NumberInput from './views/NumberInput.vue'
import SlideBarList from './views/SlideBarList.vue'
import LazyLoad from './views/LazyLoadPage.vue'
import AwesomeAnimation from './views/AwesomeAnimation.vue'
import MessageDirector from './views/MessageDirector.vue'
import GetRef from './views/GetRef'

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      meta: { title: '首页' },
      name: 'home',
      component: Home
    },{
      meta: { title: '红包雨' },
      path: '/red-packet',
      name: 'redPacket',
      component: RedPacket
    },{
      meta: { title: '滑动方向' },
      path: '/move-direction',
      name: 'moveDirection',
      component: MoveDirection
    },{
      path: '/demo',
      meta: { title: 'demo' },
      name: 'demo',
      component: Demo,
    },{
      meta: { title: '数字输入框' },
      path: '/number-input',
      name: 'numberInput',
      component: NumberInput,
    },{
      meta: { title: '好玩的动画' },
      path: '/awesome-animation',
      name: 'awesomeAnimation',
      component: AwesomeAnimation,
    },{
      meta: { title: '滑动条' },
      path: '/slide-bar-list',
      name: 'slideBarList',
      component: SlideBarList,
    },{
      meta: { title: '懒加载' },
      path: '/lazyload',
      name: 'LazyLoad',
      component: LazyLoad,
    },{
      meta: { title: '消息机制' },
      path: '/message-director',
      name: 'MessageDirector',
      component: MessageDirector,
    },{
      meta: { title: '跨层级获取实例' },
      path: '/get-ref',
      name: 'GetRef',
      component: GetRef,
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next();
});
export default router
