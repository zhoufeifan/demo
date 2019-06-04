<template>
<main class="page-container">
  <section class="animation-item-container">
    <p class="title">进度条</p>
    <div class="content">
      <div class="progress-bar">
        <p class="streak"/>
      </div>
    </div>
  </section>
  <section class="animation-item-container">
    <p class="title">loading 动画</p>
    <div class="content loading-bar-content">
      <div class="loading-bar"></div>
    </div>
  </section>
</main>
</template>
<script>
  export default {
    name: 'ProgressBar',
    components: {
    },
    data() {
    }
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
.page-container {
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  .animation-item-container {
    width: 25%;
    .title {
      margin-bottom: 10px;
    }
    .content {
      width: 100%;
      height: 100px;
    }
  }
  .streak {
    border-radius: 10px;
    height: 100%;
    background: linear-gradient(-45deg, transparent 25%, #58a 0, #58a 50%,transparent 0, transparent 75%, #58a 0);
    background-size: 30px 30px;
    background-color: green;
    background-position: left;
    animation: streak 12s linear infinite, increase 3s ease-in;
  }
}

.progress-bar {
  height: 20px;
  border-radius: 10px;
  width: 100%;
  background-color: #ccc;
}

@keyframes streak {
	from { 
    background-position: 0px 0px;
  }
	to { 
    background-position: 1000px 0;
  }
}
@keyframes increase {
	0% { 
    width: 5%;
  }
  30%{
    width: 40%;
  }
	50% { 
    width: 40%;
  }
  70%{
    width: 70%;
  }
  100%{
    width: 100%;
  }
}
.loading-bar-content {
  position: relative;
  .loading-bar {
    @include center-position;
    border-radius: 50%;
    border: 5px solid #ccc;
    animation: spread 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
}

@keyframes spread {
	from { 
    height: 0;
    width: 0;
    opacity: 1;
  }
	to { 
    height: 80px;
    width: 80px;
    opacity: 0;
  }
}
</style>
