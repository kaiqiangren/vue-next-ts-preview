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
      setTimeout(() => {
        commit("getUserInfo", +new Date() + 'action')
      },2000)
    }
  },
  getters: {
    userInfoGetter (state) {
      return state.userInfo.name
    }
  }
})

export default store
