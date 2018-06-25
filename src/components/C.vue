
<template>
  <div>
    <p>
      C组件
      {{ $store.state.count }}

    </p>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      cval: 2
    }
  },
  mounted () {
    // setInterval(_ => this.$store.state.count++, 1000)
    // console.log(this.$store.state.count)
    console.log(this.$store.getters)
  },
  computed: {
    mycount () {
      return this.cval
    },
    ...mapState(['count', 'user']),
    ...mapState({
      num: 'count',
      p1: state => state.user[0],
      count2 (state) {
        return state.count + this.cval
      }
    })
  }

}
</script>
