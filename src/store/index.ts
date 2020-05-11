import { createStore } from 'vuex'

const store = createStore({
  state: {
    userInfo: {
      name:'renkq'
    }
  },
  mutations: {
    getUserInfo (state, name) {
      state.userInfo.name = name
    }
  },
  actions: {
    asyncGetUserInfo ({ commit }) {
      console.log(commit)
    }
  },
  getters: {
    userInfoGetter (state) {
      return state.userInfo
    }
  }
})

export default store
