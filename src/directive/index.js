import Vue from 'vue'
const directives = [{
  name: 'focus',
  config: {
    inserted: function (el) {
      // 聚焦元素
      el.focus()
    }
  }
}]
directives.forEach(item => {
  Vue.directive(item.name,item.config)
})