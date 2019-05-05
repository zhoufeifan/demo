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
    },
    render(){
      const aa = 'nima'
      const tag = '<span>fd</span>'
      return(
        <div>
          {aa}
          <tag/>
        </div>
        )
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