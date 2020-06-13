<template>
  <div class="inner-container">{{data.name3}}</div>
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
