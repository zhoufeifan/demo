<template>
  <div class="inner-container">{{data.name1}}</div>
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