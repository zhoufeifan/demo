<template>
<div>
  我是大爷
  <A/>
  <button @click="getSonRef">获取孙子节点</button>
</div>
</template>
<script>
  import A from './A'
  export default {
    name: 'GrandFather',
    components: {
      A
    },
    methods: {
      getSonRef() {
        console.log(this.son);
        console.log(this.son1);
        // console.log(this.son1.$el)
      }
    },
    provide() {
      return {
        setChildrenRef: (name, ref) => {
          this[name] = ref;
        },
        getChildrenRef: name => {
          return this[name];
        },
        getRef: () => {
          return this;
        }
      };
    },
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
</style>