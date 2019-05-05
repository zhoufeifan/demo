import Vue from 'vue'
const directives = [{
  name: 'my-ref',
  config: {
    bind: function (el, binding, vnode) {
      // 绑定状态执行一次
      binding.value(vnode.componentInstance || el);
    },
    update: function update(el, binding, vnode, oldVnode) {
      if (oldVnode.data && oldVnode.data.directives) {
        var oldBinding = oldVnode.data.directives.find(function (directive) {
          var name = directive.name;
          return name === 'my-ref';
        });
        if (oldBinding && oldBinding.value !== binding.value) {
          oldBinding && oldBinding.value(null);
          binding.value(vnode.componentInstance || el);
          return;
        }
      }
      // Should not have this situation
      if (vnode.componentInstance !== oldVnode.componentInstance || vnode.elm !== oldVnode.elm) {
        binding.value(vnode.componentInstance || el);
      }
    },
    unbind: function unbind(_, binding) {
      Vue.nextTick(function () {
        binding.value(null);
      });
    }
  }
}, {
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