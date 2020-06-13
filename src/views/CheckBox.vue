<template>
  <div class="checkbox">
     <p>子组件</p>
     <p>
        <input type="checkbox" id="checkbox" v-model="isChecked">
        &nbsp;
        <label for="checkbox">A: {{ isChecked }}</label>
     </p>
    <p>
        <input type="checkbox" id="checkbox" :checked="checkedB" @change="$emit('update:checkedB', !checkedB)">
        &nbsp;
        <label for="checkbox">B: {{ isChecked }}</label>
    </p>

    <p>
        <input type="checkbox" id="checkbox" :checked="checkedC" @change="$emit('update:checkedC', !checkedC)">
        &nbsp;
        <label for="checkbox">C: {{ isChecked }}</label>
    </p>

  </div>
</template>

<script>
export default {
    props: {
        checkedA: {
            type: Boolean,
            default: false
        },
        checkedB: {
            type: Boolean,
            default: false
        },
        checkedC: {
            type: Boolean,
            default: false
        }
    },
    model: {
        prop: 'checkedA',
        event: 'change'
    },
    computed: {
        isChecked: {
            get() {
                return this.checkedA;
            },
            set(value) {
                this.$emit('change', value);
            }
        }
    },
    methods: {
        nima(e) {
            console.log(e.target.value);
        }
    }
}
</script>

<style lang="scss" scoped>
.checkbox {
    border: 1px solid #ccc;
    padding: 10px;
}
</style>