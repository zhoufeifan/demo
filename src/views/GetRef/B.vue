<template>
<div ref="nima" v-my-ref="c => setChildrenRef('son', c)">
  {{text}}
  <input v-model="text"/>
</div>
</template>
<script>
  export default {
    name: 'son',
    inject: {
      setChildrenRef: {
        default: () => {}
      }
    },
    data() {
      return {
        text: '我是儿子'
      }
    }
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
</style>