<template>
  <div class="home">
    <h1>DEMO 列表</h1>
    <div id="nav">
      <ul>
        <li><router-link to="/red-packet">红包动画优化</router-link></li>
        <li><router-link to="/move-direction">滑动方向判断</router-link></li>
        <li><router-link to="/number-input">数字输入框</router-link></li>
        <li><router-link to="/lazyload">图片懒加载</router-link></li>
        <li><router-link to="/awesome-animation">好玩的动画</router-link></li>
        <li><router-link to="/slide-bar-list">左滑删除</router-link></li>
        <li><router-link to="/message-director">消息机制</router-link></li>
        <li><router-link to="/get-ref">跨层级获取实例</router-link></li>
        <li><router-link to="/demo">demo草稿</router-link></li>
        <li><router-link to="/ie-iframe">IE iframe test</router-link></li>
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