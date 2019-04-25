<template>
<main class="page-container">
</main>
</template>
<script>
const messageDirector = {
  receiveMessage(data){
    console.log(data)
  },
  sendMessage(){
  }
}
  export default {
    name: 'MessageDirector',
    mounted() {
    },
    methods: {

    },
    data() {
      return {
      }
    }
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
.page-container >.image-section{
  margin-bottom: 30px;
}
</style>