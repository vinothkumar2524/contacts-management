import { createStore } from 'vuex'
import contacts from './contacts';
import toasts from './Toast';
// import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    contacts,
    toasts
  },
  // plugins: [createPersistedState()],
})
