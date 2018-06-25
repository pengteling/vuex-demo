import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0,
    user: [
      {
        id: 1, name: 'zs'
      },
      {
        id: 2, name: 'ww'
      },
      {
        id: 3, name: 'ls'
      }
    ]
    // musicList:[]
  },
  getters: {
    p1 (state) {
      return state.user[0]
    },
    pwho: (state) => (payload) => {
      return state.user[payload.id]
    }

  },
  mutations: {
    addCount (state) {
      state.count++
    },
    addCount2 (state, payload) {
      state.count = state.count + payload.step
    }
  },
  actions: {
    act1 ({ commit }) {
      commit('addCount')
      commit('addCount2', {
        step: 5
      })
    },
    loadData ({commit}) {
      fetch('http://music.henshui.com/api/musicList.js?!234')
        .then(res => res.text())
        .then(res => {
          console.log(res)
          commit('addCount')
        })
    }
  }
})
