<template>
  <div>
    <p>
      A组件
      {{ $store.state.count }}
    </p>
    <B></B>
  </div>
</template>
<script>
import B from './B'
export default {
  components: {B},
  mounted () {
    console.log(this.$store.state.count)
  }
}
</script>
