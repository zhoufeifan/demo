<template>
  <div class="home">
    <h1>DEMO 列表</h1>
    <div id="nav">
      <ul>
        <li><router-link to="/redpacket">红包动画优化</router-link></li>
        <li><router-link to="/movedirection">滑动方向判断</router-link></li>
        <li><router-link to="/numberinput">数字输入框</router-link></li>
        <li><router-link to="/slideBarList">左滑删除</router-link></li>
        <li><router-link to="/demo">demo</router-link></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home{
  padding: 10px;
  ul>li{
   margin-top: 10px; 
  }
}
#nav {
  padding: 30px;
}
</style>