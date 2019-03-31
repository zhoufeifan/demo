<template>
<main class="page-container">
  <LazyImage class="image-section" v-for="img in list" :key="img" :imgUrl="img"/>
</main>
</template>
<script>
  import LazyImage from '@/components/LazyImage.vue'
  const imageList = [
    'http://zff-img.lshwn.cn/images/0.jpg',
    'http://zff-img.lshwn.cn/images/1.jpg',
    'http://zff-img.lshwn.cn/images/2.jpg',
    'http://zff-img.lshwn.cn/images/3.jpg',
    'http://zff-img.lshwn.cn/images/4.jpg',
    'http://zff-img.lshwn.cn/images/5.jpg',
    'http://zff-img.lshwn.cn/images/6.jpg',
    'http://zff-img.lshwn.cn/images/7.jpg',
    'http://zff-img.lshwn.cn/images/8.jpg',
    'http://zff-img.lshwn.cn/images/9.jpg',
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