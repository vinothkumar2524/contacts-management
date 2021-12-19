const state = {
  show: false,
  message: "",
  duration: 3000,
};

const mutations = {
  showToast(state, { message, duration }) {
    state.show = true;
    state.message = message;
    state.duration = duration ? duration : 3000;
  },
  reset(state) {
    (state.show = false), (state.message = ""), (state.duration = 3000);
  },
};

const actions = {
  showToast({ commit }, payload) {
    commit("showToast", payload);
  },
  reset({ commit }) {
    commit("reset");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
