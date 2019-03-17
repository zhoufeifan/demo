<template>
<ul class="list-container">
  <li v-for="item in list" :class="['item', item.moved ? 'moved': '']" :key="item.title" @touchstart="touch" @touchmove.stop="move(item, $event)">
    <figure>
      <img :src="item.avatar" width="50px;"/>
    </figure>
    <section class="content-container">
      <h1 class="title">{{item.title}}</h1>
      <p class="content">{{item.content}}</p>
      <time>{{item.date}}</time>
    </section>
    <div class="delete">删除</div>
  </li>
</ul>
</template>
<script>
  import { throttle } from '@/utils/tools'
  function gesture(startPoint, endPoint){
    let relativePoint = {X: endPoint.X-startPoint.X, Y: endPoint.Y-startPoint.Y};
    // 以浏览器的Y轴正向为主轴，滑动路径较主轴的逆时针方向偏移角度
    let deg = Math.atan2(relativePoint.X,relativePoint.Y)*180/Math.PI;
    let distance = Math.sqrt((startPoint.X - endPoint.X)*(startPoint.X - endPoint.X) + (startPoint.Y - endPoint.Y)*(startPoint.Y - endPoint.Y));
    if(distance < 2){
      //滑动距离太小
      return;
    }
    //区间范围(-180~180]
    if((deg >-180 && deg <=-135) || (deg<=180 && deg>135)){
      return 'up';
    }else if(deg>45 && deg<=135){
      return 'right';
    }else if(deg>-45 && deg<=45){
      return 'bottom';
    }else{
      return 'left';
    }
  }
  export default {
    name: 'SlideBarList',
    mounted() {
    },
    data() {
      return {
        list: [{
          title: '邀请函',
          avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2618629603,1903483016&fm=26&gp=0.jpg',
          date: '3月10日',
          content: '发顺丰撒旦副书记奥利弗就烦死了开飞机睡懒觉广东韶关发生的副驾驶大立科技斐林试剂'
        }],
        startPoint: {},
        endPoint: {}
      }
    },
    methods: {
      touch(e){
        this.startPoint.X = e.changedTouches[0].pageX;
        this.startPoint.Y = e.changedTouches[0].pageY;
      },
      move: throttle(function(item, e){
        this.endPoint.X = e.changedTouches[0].pageX;
        this.endPoint.Y = e.changedTouches[0].pageY;
        const direction = gesture(this.startPoint, this.endPoint);
        if(direction === 'left'){
          //调用preventDefault 解决ios 滑动卡顿问题
          e.preventDefault();
          this.$set(item,'moved', true)
        }else if(direction === 'right'){
          e.preventDefault();
          this.$set(item,'moved', false)
        }
      },500)
    },
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
.list-container{
  overflow: hidden;
  >.item {
    display: flex;
    height: 80px;
    padding: 10px;
    align-items: center;
    position: relative;
    transition: transform .3s;
    &.moved{
      transform: translateX(-80px);
    }
    figure > img{
      vertical-align: middle;
    }
    .content-container {
      margin-left: 10px;
      flex: 1;
      height: 100%;
      text-align: left;
      position: relative;
      .title {
        font-size: 18px;
        height: 30px;
      }
      .content{
        font-size: 14px;
        margin-top: 6px;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      time{
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .delete{
      width: 80px;
      transition: transform .5s;
      position: absolute;
      background-color: #ff6666;
      right: -80px;
      @include Height(80px);
      font-size: 16px;
      color: white;
    }
  }
}
</style>