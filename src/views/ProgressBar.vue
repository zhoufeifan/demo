<template>
<main class="page-container">
  <div class="bar-container">
    <div class="bar-content" :style="{width: `${value}%`}">
      <div class="streak"></div>
    </div>
  </div>
</main>
</template>
<script>
  export default {
    name: 'ProgressBar',
    components: {
    },
    mounted() {
      this.change()
    },
    methods: {
      change(){
        if(this.value >= 100) return
        this.value += 10
        setTimeout(this.change, 1000)
      }
    },
    data() {
      return {
        value: 10
      }
    }
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
.page-container {
  margin-top: 100px;
  .bar-container {
    @include center-block;
    width: 500px;
    height: 20px;
    background-color: #eeeeee;
    border-radius: 10px;
  }
  .bar-content {
    border-radius: 10px;
    background-color: green;
    width: 50%;
    height: 100%;
    transition: width .3s;
  }
  .streak {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(-45deg, transparent 25%, #58a 0, #58a 50%,transparent 0, transparent 75%, #58a 0);
    background-size: 30px 30px;
    background-position: left;
    animation: move 20s linear infinite;
  }
}
@keyframes move {
	from { background-position: 0px 0px; }
	to { background-position: 1000px 0; }
}
</style>