<template>
  <div class="demo">
    <input/>
    <button @click="go">尼玛1</button>
    <Demo1></Demo1>
  </div>
</template>
<script>
import Demo1 from '@/views/Demo1.vue'
  export default {
    name: 'demo',
    components: {
      Demo1
    },
    // watch: {
    //   '$route' () {
    //     if (this.$route.name === 'demo') {
    //       console.log('b')
    //     }
    //   }
    // },
    created(){
      console.log('demo')
    },
    mounted(){
    },

    methods: {
      go(){
        this.$router.push({name:'demo',params:{id:Math.random()}})
      }
    },
    data(){
      return {
      }
    },
    beforeRouteUpdate (to, from, next) {
      console.log('a')
    },
    // beforeRouteEnter(to, from, next){ // 写在当前组件
    //   to.meta.keepAlive = false    
    //   console.log('fd')
    //   next()
    // },
  //   beforeRouteLeave: (to, from, next) => { //写在前一个组件
  //     to.meta.keepAlive = false
  //     next()
  //   },
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
.demo{
  background: green;
  /deep/ input{
    width: 200px;
  }
}
.demo1 {
  background: red;
}
</style>