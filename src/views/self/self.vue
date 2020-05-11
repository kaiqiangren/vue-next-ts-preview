<template>
  <div>
    <div>
      getter:{{getters.userInfoGetter}}
    </div>
    <div>
      state:{{state.userInfo}}
    </div>
    <div>
      <button @click="handleMutation">mutation</button>
      <button @click="handleAction">action</button>
    </div>
  </div>
</template>

<script>
import {
  useStore,
  // mapState,
  // mapMutations,
  // mapActions,
  // mapGetters
} from 'vuex'

export default {
  name: 'self',
  setup() {
    const store = useStore()
    console.log(store, 'store')
    console.log(store.getters, 'getters')
    const state = store.state
    const getters = store.getters
    // console.log(mapState(store.state),'mapState')
    // console.log(mapMutations(store._mutations),'mapMutations')
    // console.log(mapActions(store._actions),'mapActions')
    // console.log(mapGetters(store.getters),'mapGetters')
    const methods = {
      // 处理commit
      handleMutation: () => {
        store.commit('getUserInfo', +new Date)
      },
      // 处理dispatch
      handleAction: () => {
        store.dispatch('asyncGetUserInfo')
      }
    }
    return {
      state,
      getters,
      ...methods
    }
  }
}
</script>

<style scoped>
</style>
