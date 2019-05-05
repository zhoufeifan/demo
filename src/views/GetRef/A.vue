<template>
<div>
  我是老爹
  <button @click="showSon = !showSon">坑儿子</button>
  <B v-if="showSon" v-my-ref="c => setChildrenRef('son1', c)"/>
</div>
</template>
<script>
  import B from './B'
  export default {
    name: 'Father',
    components: {
      B
    },
    inject: {
      setChildrenRef: {
        default: () => {}
      }
    },
    data() {
      return {
        showSon:false
      }
    }
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
</style>