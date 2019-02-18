<template>
<section class="container" ref="container">
</section>
</template>
<script>
export default {
  name: 'demo2',
  mounted(){
    this.container = this.$refs.container
    this.height = this.container.clientHeight;
    this.width = this.container.clientWidth;
    this.redPacketHeight = 78;
    this.redPacketWidth = 63;
    this.currentRedPacket = null;
    this.createRedPacket();
    this.start()
  },
  methods: {
    createRedPacket(num = 100){
      let fragment = document.createDocumentFragment();
      for(let i = 0; i< num; i++){
        let redPacketContainer = document.createElement("div");
        redPacketContainer.className = 'red-packet-container new';
        let redPacket = document.createElement("div");
        redPacket.className = "red-packet";
        redPacketContainer.appendChild(redPacket);
        fragment.appendChild(redPacketContainer)
      }
      this.currentRedPacket = fragment.firstChild;
      this.container.appendChild(fragment);
    },
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
      let currentRedPacket = this.currentRedPacket;
      if(!this.running || !currentRedPacket) return;
      // 随机生成掉落的位置
      let position = Math.round(Math.random()*(this.width-this.redPacketWidth));
      currentRedPacket.style.left = position+"px";
      currentRedPacket.style.transitionDuration = duration/1000+"s";
      currentRedPacket.addEventListener('click',(e)=>{
        e.preventDefault();
        currentRedPacket.firstChild.className = 'red-packet opened';
        setTimeout(()=>{
          currentRedPacket.remove();
        },300)
      });

      let distance = this.height + this.redPacketHeight;
      //旋转的范围控制在 -180~180
      let rotateX = Math.round((Math.random()-0.5)*180);
      let rotateY = Math.round((Math.random()-0.5)*180);
      let rotateZ = Math.round((Math.random()-0.5)*180);
      // 延迟修改属性触发 transition 效果
      setTimeout(()=>{
        currentRedPacket.style.transform = `translateY(${distance}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      }, 50)
      setTimeout(()=>{
        currentRedPacket.remove();
      }, duration + 50)
      let intervalTime = 500 + Math.round(Math.random()*100);
      if(currentRedPacket.nextElementSibling) {
        this.currentRedPacket = currentRedPacket.nextElementSibling;
      } else{
        this.createRedPacket(50)
      }
      setTimeout(()=>{
        this.drop(duration)
      },intervalTime);
    }
  }
}
</script>
<style lang='scss' scoped>
.container{
  border: 1px solid #eee;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>