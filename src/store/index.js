import { createStore } from 'vuex'
import storage from '@/store/storage.js'

export default createStore({
  state: {
    user: {
      id: null,
      username: null,
      avatar: null,
      discriminator: null,
      flags: null,
      locale: null,
      guilds: [],
      fetchedAt: null
    }
  },
  mutations: {
    clear () {
      storage.delete('user')
    },
    set (state, user) {
      for (const [key, value] of Object.entries(user)) {
        state.user[key] = value
      }

      storage.set('user', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
