<template>
  <div class="input-container">
    <p>该输入框只支持输入整型或者浮点数字</p>
    <input class="input-default" @input="inputFilter" v-model="text" v-focus/>
  </div>
</template>
<script>
  export default {
    name: 'demo',
    mounted(){
    },
    methods: {
      inputFilter(e){
        const currentValue = e.target.value
        console.log(currentValue);
        if (!/^-?(([1-9]\d*|0)(\.\d*)?)?$/.test(currentValue)) {
          let result = ''
          // 在处理在文本中间插入非法字符的情况，34.54h65 => 34.54，没有匹配到则默认替换为空
          currentValue.replace(/^(-?(([1-9]\d*|0)(\.\d*)?)?).+$/, (match, p1) => {
            result = p1
          })
          this.text = result
        }
      }
    },
    data(){
      return {
        text: ''
      }
    }
  }
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
.input-container{
  margin-top: 200px;
  p {
    font-weight: bold;
    font-size: 18px;
    color: #000;
  }
  .input-default{
    margin-top: 30px;
    font-size: 16px;
  }
}
</style>