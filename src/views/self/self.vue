<template>
  <div>
    self
    {{state.userInfo}}
  </div>
</template>

<script>
import {
  useStore,
  mapState,
  mapMutations,
  mapActions,
  mapGetters
} from 'vuex'

export default {
  name: 'self',
  setup() {
    const store = useStore()
    const state = store.state
    console.log(mapState(store.state),'mapState')
    console.log(mapMutations(store._mutations),'mapMutations')
    console.log(mapActions(store._actions),'mapActions')
    console.log(mapGetters(store.getters),'mapGetters')
    return {
      state
    }
  }
}
</script>

<style scoped>
</style>
