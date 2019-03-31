import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RedPacket from './views/RedPacket.vue'
import Demo from './views/Demo.vue'
import MoveDirection from './views/MoveDirection.vue'
import NumberInput from './views/NumberInput.vue'
import SlideBarList from './views/SlideBarList.vue'
import LazyLoad from './views/LazyLoadPage.vue'
import ProgressBar from './views/ProgressBar.vue'

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
      meta: { title: '进度条' },
      path: '/progress-bar',
      name: 'progressBar',
      component: ProgressBar,
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
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next();
});
export default router
