<template>
  <div class="inner-container">{{data.name2}}</div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: ()=>({})
        }
    }
}
</script>
