/*
<!-- 模态窗插槽 -->
<global-slot name="form-link-modal"></global-slot>
<!-- 表单关联设置模态窗 -->
<global-plug name="form-link-modal">
  <div>
  </div>
</global-plug>
*/



function install(Vue, options) {
  const _slots = Object.create(null)
  const _plugs = Object.create(null)

  Vue.component('global-slot', {
    props: {
      name: {
        type: String,
        required: true,
      }
    },
    
    created() {
      if (_slots[this.name]) {
        throw new Error(`global slot component(${this.name}) has already existed!`)
      }
      _slots[this.name] = this
    },

    destroyed() {
      _slots[this.name] = undefined
    },

    render() {
      const plug = _plugs[this.name]
      if (plug) {
        // 插槽只允许返回一个节点，如果有多个元素要展示，请用一个容器包含它
        return plug.$slots.default && plug.$slots.default[0]
      }
    },
  })

  Vue.component('global-plug', {
    props: {
      name: {
        type: String,
        required: true,
      }
    },

    created() {
      _plugs[this.name] = this
    },

    render() {
      const slot = _slots[this.name]
      slot && slot.$forceUpdate()
    },
  })
}


export default { install }
