<script>
import { mapState } from 'vuex'
import Vue from 'vue'
  export default {
    name: 'demo',
    render(){
      return(
        <div>
          <script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2/js-cloudimage-360-view.min.js"/>
          <div
              class="cloudimage-360"
              data-folder="https://scaleflex.cloudimg.io/crop/1920x700/n/https://scaleflex.airstore.io/demo/360-car/"
              data-filename="iris-{index}.jpeg"
              data-amount="18"
              autoplay
              autoplay-reverse
              data-full-screen
              data-magnifier="3"
          ></div>
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