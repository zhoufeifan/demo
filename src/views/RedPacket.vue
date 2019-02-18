<template>
<main class="main-container">
  <div class="old-container container" v-if="old">
    <h2 class="title" @click="toggle">点击查看优化后效果</h2>
    <demo1/>
  </div>
  <div class="new-container container" v-if="!old">
    <h2 class="title" @click="toggle">点击查看优化前效果</h2>
    <demo2/>
  </div>
</main>
</template>
<script>
import demo1 from '@/components/demo1.vue'
import demo2 from '@/components/demo2.vue'
  export default {
    name: 'ReadPacket',
    components: {
      demo1,
      demo2
    },
    mounted(){
    },
    methods: {
      toggle(){
        this.old = !this.old;
      }
    },
    data(){
      return {
        old: false
      }
    },
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
.main-container{
  >.container{
    width: 375px;
    height: 667px;
    margin: 30px auto;
    .title{
      padding: 10px;
      cursor: pointer;
    }
  }
}
</style>
<style lang='scss'>
  .red-packet-container{
    position: absolute;
    &.new{
      transition: transform 2s linear;
      top: 0;
      transform: translateY(-78px) rotateX(0) rotateY(0) rotateZ(0);
    }
    &.old{
      position: absolute;
      top: -78px;
    }
    .red-packet{
      height: 78px;
      width: 63px;
      background-image: url('~@/assets/red-packet.png');
      background-size: contain;
      background-repeat: no-repeat;
      transition: transform .3s;
      &.opened{
        background-image: url('~@/assets/red-packet-opened.png');
        transform: scale(3);
      }
    }
  }
</style>

