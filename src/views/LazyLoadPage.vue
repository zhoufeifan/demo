<template>
<main class="page-container">
  <LazyImage class="image-section" v-for="img in list" :key="img" :imgUrl="img"/>
</main>
</template>
<script>
  import LazyImage from '@/components/LazyImage.vue'
  const imageList = [
    'https://pic.fanqier.cn/static/img/section-banner1.jpg',
    'https://pic.fanqier.cn/static/img/section-banner2.jpg',
    'https://pic.fanqier.cn/static/img/section-banner3.jpg',
    'https://pic.fanqier.cn/static/img/section-banner4.jpg',
    'https://pic.fanqier.cn/static/img/section-banner5.jpg',
  ]
  export default {
    name: 'LazyLoadPage',
    components: {
      LazyImage
    },
    mounted() {
    },
    data() {
      return {
        list : Object.freeze(imageList)
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