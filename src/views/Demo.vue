<template>
<div class="container">
  <p class="child"></p>
</div>

</template>
<script>
import { mapState } from 'vuex'
import Vue from 'vue'
  export default {
    name: 'demo',
    components: {

    },
    created(){
    },
    mounted(){
      var blob = new Blob([document.querySelector('#worker').textContent]);
      var url = window.URL.createObjectURL(blob);
      var worker = new Worker(url);

      worker.onmessage = function (e) {
        // e.data === 'some message'
        console.log(e.data)
      };
      worker.postMessage('Work done!');
    },
    computed: {
    },
    methods: {
      nima() {
        this.aaa = 'nn'
      }
    },
    data(){
      return {
        aaa: 'aa'
      }
    }
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
.container{
  overflow: hidden;
  background-color: red;
  .child{
    float: left;
    height: 500px;
  }
}
</style>