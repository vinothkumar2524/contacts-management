import { createStore } from 'vuex'
import contacts from './contacts';
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    contacts
  },
  plugins: [createPersistedState()],
})
