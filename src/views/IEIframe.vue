<template>
  <div class="ie-iframe-demo">
      sfdsfds
      <iframe ref="iframe" sandbox="allow-same-origin allow-scripts">

      </iframe>
  </div>
</template>

<script>
export default {
    mounted() {
        const iframe = this.$refs.iframe;
        // console.log();
        // this.$refs.iframe
        setTimeout(()=>{
            iframe.src = 'http://192.168.199.148:8080';
        },1000)
        // iframe.src = 'http://local.dasouche.net:8080';
    }
}
</script>

<style lang="scss" scoped>
.ie-iframe-demo {
    background: red;
    >iframe {
        width: 100%;
        height: 600px;
        background: white;
    }
}
</style>