<template>
<ul class="list-container">
  <li v-for="item in list" class='item' ref="moveBar" id='nima' :key="item.title" @touchstart="touch" @touchmove.stop="move" @touchend.stop="end">
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
  import { throttle } from '@/utils/tools';
  const MIN_OFFSET = -200; // 滑动偏移左极值
  const MAX_OFFSET = 0; // 滑动偏移右极值
  const MID_OFFSET = (MAX_OFFSET + MIN_OFFSET)/2; // 中间值
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
        previousPoint: {},
        currentPoint: {},
        offset: 0
      }
    },
    methods: {
      touch(e){
        this.previousPoint.X = e.changedTouches[0].pageX;
        this.previousPoint.Y = e.changedTouches[0].pageY;
      },
      goBack(t = 0){
        const a = 0.2
        if(this.offset >= MAX_OFFSET || this.offset <= MIN_OFFSET) return
        const distance = 3 + a * t * t
        if(this.offset > MID_OFFSET){
          // 往右移动
          this.offset = Math.min(MAX_OFFSET, this.offset + distance)
        } else {
          // 往左移动
          this.offset = Math.max(MIN_OFFSET, this.offset - distance)
        }
        this.$refs.moveBar[0].style.webkitTransform = `translateX(${this.offset}px)`
        window.requestAnimationFrame(()=>{
          this.goBack(t+1)
        })
      },
      move(e){
        this.currentPoint.X = e.changedTouches[0].pageX;
        this.currentPoint.Y = e.changedTouches[0].pageY;
        const direction = gesture(this.previousPoint, this.currentPoint);
        if(direction === 'up' || direction === 'down') return
        e.preventDefault(); // 解决ios卡顿问题
        if(direction === 'left' && this.offset === -80) return
        if(direction === 'right' && this.offset === 0) return
        let offset = this.offset + (this.currentPoint.X - this.previousPoint.X)
        offset = Math.max(MIN_OFFSET, Math.min(MAX_OFFSET, offset))
        this.offset = offset
        this.previousPoint.X = this.currentPoint.X
        this.previousPoint.Y = this.currentPoint.Y
        this.$refs.moveBar[0].style.webkitTransform = `translateX(${offset}px)`
      },
      end() {
        this.goBack()
      }
    }
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
.list-container{
  overflow: hidden;
  position: absolute;
  >.item {
    display: flex;
    height: 80px;
    padding: 10px;
    align-items: center;
    position: relative;
    will-change: transform;
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
      width: 200px;
      position: absolute;
      background-color: #ff6666;
      right: -200px;
      @include Height(80px);
      font-size: 16px;
      color: white;
    }
  }
}
</style>