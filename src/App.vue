<template>
  <div id="app">
  <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <global-slot name="global-el"></global-slot>
  <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style lang="scss">
@import '~@/style/reset.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
