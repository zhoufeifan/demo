



<script>
import Vue from 'vue'
import CheckBox from './CheckBox';
import C1 from './temp/C1';
import C2 from './temp/C2';
import C3 from './temp/C3';
function keyGenerator () {
    const UNIQUE_KEY_PROP = '__unique_key_prop__';
    const KEY_PREFIX = '__key_prefix__' + Date.now() + '_';
    let uid = 0;
    return function (obj) {
        if (UNIQUE_KEY_PROP in obj) {
            return obj[UNIQUE_KEY_PROP];
        }
        const value = KEY_PREFIX + uid++;
        Object.defineProperty(obj, UNIQUE_KEY_PROP, { value });
        return value;
    }
}
export default {
  name: 'demo',
  components: {
    CheckBox,
    C1,
    C2,
    C3
  },
  methods: {
    getUniqueKey: keyGenerator(),
    deleteItemByIndex(index) {
      debugger
      this.inputList.splice(index, 1);
    },
    addInput() {
      this.inputList.push({
        value: ''
      });
    }
  },
  data() {
    console.time('testForEach');
    const list = []
    // for(let i = 0; i< 1000; i++) {
    //   list.push({label: i+'', value: i})
    // }
    return {
      checkedA: false,
      checkedB: false,
      checkedC: false,
      inputList: [],
      stayAlone: true,
      templateList: [{
        type: '1',
        options: {
          name1: '组件1',
        }
      },{
        type: '2',
        options: {
          name2: '组件2',
        }
      },{
        type: '3',
        options: {
          name3: '组件3',
        }
      }],
      list: Object.freeze(list)
      // list
    }
  },
  render() {
    console.log('aa');
    return (
      <div class="example">
        <p class="title">条件模板</p>
        <div>{this.templateList.map(item=>{
          const Com = `C${item.type}`
          return (<Com class="template-item" data={item.options}></Com>)
        })}</div>
      </div>
    )
  },
  mounted() {
    console.timeEnd('testForEach');
  }
}
</script>
<style lang='scss' scoped>
@import '~@/style/mixin.scss';
.container{
  width: 100vw;
  height: 100vh;
  padding: 10px;
}
  .example {
    margin-bottom: 20px;
    input {
      margin: 4px;
      border: 1px solid #ccc;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
    }
    button {
      cursor: pointer;
      margin-top: 10px;
      padding: 4px;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 16px;
    }
    .title {
      color: #000;
      font-size: 18px;
      font-weight: bold;
      text-align: left;
      margin-bottom: 10px;
    }
    .template-item {
      padding: 10px;
      border: 1px solid #ccc;
    }
  }
</style>