<template>
<section class="image-container" ref="container">

</section>
</template>
<script>
  const screenHeight = window.screen.height
  // 定义缓冲距离，用于懒加载
  const BUFFER_HEIGHT = 0
  export default {
    name: 'LazyImage',
    props: {
      imgUrl: String
    },
    mounted() {
      const observer = new IntersectionObserver(
        (changes) => {
          changes.forEach((change) => {
            const { boundingClientRect: { top: offsetTop }, rootBounds: { height: screenHeight }} = change
            if (offsetTop < screenHeight + BUFFER_HEIGHT) {
              this.lazyLoadImg()
              // 关闭观察器
              observer.disconnect()
            }
          })
        }
      )
      observer.observe(this.$refs.container)
    },
    methods: {
      lazyLoadImg() {
        const contentElement = this.$refs.container
        if (!contentElement) return
        const image = new Image()
        image.src = this.imgUrl
        image.onload = () => {
          contentElement.style.backgroundSize = 'cover'
          contentElement.style.backgroundImage = `url(${this.imgUrl})`
        }
      }
    }
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
.image-container{
  padding-top: 25%;
  padding-bottom: 25%;
  background: white url(~@/assets/loading.svg) center no-repeat;
  background-size: 70px 70px;
}
</style>