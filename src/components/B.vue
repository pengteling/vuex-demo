<template>
  <div>
    <p>
      B组件
      {{ $store.state.count }}
    </p>
    <C></C>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import C from './C'
export default {
  components: {C},

  computed: {
    ...mapGetters(['p1', 'pwho']),
    ...mapGetters({
      bP1: 'p1'
      /* 没有这种写法 */
      // pSec2 (getters) {
      //   // return getters.pwho({id: 2})
      //   // console.log(getters)
      //   return getters
      // }

    }),
    pSec () {
      return this.pwho({id: 2})
    }
  },
  methods: {
    ...mapMutations({
      add1: 'addCount',
      addcustom: 'addCount2'
    }),
    ...mapActions(['act1', 'loadData'])
  },
  mounted () {
    // console.log(this.$store.state.count)
    // this.add1()
    // this.add1()
    // this.addcustom({step: 3})
    // this.$store.commit({
    //   type: 'addCount'
    // })
    // this.$store.dispatch('act1')\
    this.loadData()
  }

}
</script>
