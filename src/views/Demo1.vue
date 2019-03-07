<template>
  <div class="demo1">
    <input/>
    <button @click="go">尼玛2</button>
  </div>
</template>
<script>
  export default {
    name: 'demo',
    components: {
    },
    created(){
    },
    mounted(){
      const timer = setInterval(() =>{                    
          // 某些定时器操作
          console.log('hellow')         
      }, 500);            
      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
      this.$once('hook:beforeDestroy', () => {            
          clearInterval(timer);                                    
      })
    },
    methods: {
      go(){
        this.$router.push({name:'demo',query:{a:Math.random()}})
      }
    },
    data(){
      return {
      }
    },
  //   beforeRouteLeave(to, from, next){ // 写在当前组件
  //     to.meta.keepAlive = false    
  //     console.log('demo2 leave')
  //     next()
  //   }
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
.demo1{
  background-color: green;
}
</style>