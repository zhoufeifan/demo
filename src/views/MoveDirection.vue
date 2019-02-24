<template>
<main>
  <h1>移动端滑动手势判断</h1>
  <div class="area" @touchstart="touch" @touchmove.stop="move">请滑动改区域</div>
  <p class="result">{{direction}}</p>
</main>
</template>
<script>
  import { throttle } from '@/utils/tools'

  function gesture(startPoint,endPoint){
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
    name: 'MoveDirection',
    components: {
    },
    mounted(){
    },
    methods: {
    },
    data(){
      return {
        direction: '',
        startPoint: {},
        endPoint: {}
      }
    },
    methods: {
      move: throttle(function(e){
        console.log('move');
        this.endPoint.X = e.changedTouches[0].pageX;
        this.endPoint.Y = e.changedTouches[0].pageY;
        this.direction = gesture(this.startPoint,this.endPoint);
      },500,1000),
      touch(e){
        if(this.disableMove) return;
        console.log('touch');
        this.startPoint.X = e.changedTouches[0].pageX;
        this.startPoint.Y = e.changedTouches[0].pageY;
      }
    }
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
.area {
  margin: 50px auto;
  width: 200px;
  height: 200px;
  line-height: 200px;
  background-color: gray;
  cursor: move;
  color: white;
  font-size: 20px;
}
.result{
  text-align: center;
  font-size: 28px;
}
</style>