<template>
<section class="container" ref="container">
</section>
</template>
<script>
import anime from 'animejs';
export default {
  name: 'demo1',
  mounted(){
    this.container = this.$refs.container
    this.height = this.container.clientHeight;
    this.width = this.container.clientWidth;
    this.redPacketHeight = 78;
    this.redPacketWidth = 63;
    this.start();
  },
  methods: {
    start(){
      this.running = true;
      this.drop(1500);
      this.drop(1000);
      this.drop(2000);
    },
    stop(){
      this.running = false;
    },
    drop(duration){
      if(!this.running) return;
      let redPacketContainer = document.createElement("div");
      redPacketContainer.className = 'red-packet-container old';
      let redPacket = document.createElement("div");
      redPacket.className = "red-packet";
      redPacketContainer.appendChild(redPacket);
      let position = Math.round(Math.random()*(this.width-this.redPacketWidth));
      redPacketContainer.style.left = position+"px";
      redPacketContainer.addEventListener('click',(e)=>{
        e.preventDefault();
        redPacket.className = 'red-packet opened';
        setTimeout(()=>{
          redPacketContainer.remove();
        },300)
      });
      this.container.appendChild(redPacketContainer);
      let distance = this.height + this.redPacketHeight;
      //旋转的范围控制在 -180~180
      let rotateX = Math.round((Math.random()-0.5)*180);
      let rotateY = Math.round((Math.random()-0.5)*180);
      let rotateZ = Math.round((Math.random()-0.5)*180);
      anime({
        targets: redPacketContainer,
        translateY: distance,
        duration,
        elasticity: 0,
        easing: 'linear',
        rotateX,
        rotateY,
        rotateZ
      }).finished.then(()=>{
        redPacketContainer.remove();
      });
      let intervalTime = 500 + Math.round(Math.random()*100);
      setTimeout(()=>{
        this.drop(duration)
      },intervalTime);
    }
  }
}
</script>
<style lang='scss' scoped>
.container{
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>