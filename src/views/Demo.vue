<template>
  <div class="demo">
  </div>
</template>
<script>
import { mapState } from 'vuex'
  export default {
    name: 'demo',
    components: {
    },
    created(){
    },
    mounted(){
      function defineReactive(data, key, val) {
        // 递归子属性
        observe(val)
        const dep = new Dep()
        Object.defineProperty(data, key, {
          enumerable: true,
          configurable: true,
          get: function reactiveGetter() {
            if(Dep.target) {
              dep.subscribe(Dep.target)
            }
            return val
          },
          set: function reactiveSetter(newVal) {
            val = newVal
            dep.notify()
          }
        })
      }
      
      function observe(data) {
        if (data instanceof Object) {
          Object.keys(data).forEach(function(key) {
              defineReactive(data, key, data[key])
          })
        }
      }

      class Watcher {
        constructor(data, key, cb) {
          Dep.target = this
          this.data = data
          this.key = key
          this.cb = cb
          // 然后触发属性的 getter 添加监听
          this.value = data[key]
          Dep.target = null
        }
        update() {
          this.cb(this.data[this.key])
        }
      }

      class Dep {
        constructor() {
          this.subs = []
        }
        subscribe(sub) {
          this.subs.push(sub)
        }
        notify() {
          this.subs.forEach(sub=>{
            sub.update()
          })
        }
      }
      Dep.target = null
      const data = { name: 'yck'}
      const data1 = {name: 'zff'}
      observe(data)
      observe(data1)
      function update(value) {
        console.log(value)
        // document.querySelector('div').innerText = value
      }
      // 模拟解析到 `{{name}}` 触发的操作
      new Watcher(data, 'name', update)
      new Watcher(data1, 'name', update)
      // update Dom innerText
      data1.name = 'aaa'
      data.name = 'hh'
    },
    computed: {

    },
    methods: {

    },
    data(){
      return {
      }
    },
    beforeRouteUpdate (to, from, next) {
      console.log('a')
    },
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