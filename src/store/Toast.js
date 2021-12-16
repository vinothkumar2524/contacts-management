const state = {
    show: false,
    message : '',
    duration : 3000
}

const mutations = {
    showToast (state, {show, message, duration}) {
      state.show = show;
      state.message = message;
      state.duration = duration;
    },
    reset (state) {
        state.show = false,
        state.message = '',
        state.duration = 3000
    }
  
}

const actions = {
    showToast ({ commit }, payload) {
        commit('showToast', payload)
    },
    reset ({commit}) {
        commit('reset');
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
