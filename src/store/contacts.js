import uuidv1 from 'uuid/v1';
import services from "../services/contacts";
import store from "./index";

const state = {
  allContacts: [],
  contact: null
}

const mutations = {
  selectContact (state, payload) {
    state.contact = payload
  },

  create (state, payload) {
    state.allContacts.push(payload)
  },

  update (state, payload) {
    state.allContacts.map((row, index) => {
      if (payload.contact_id === row.contact_id) {
        state.allContacts[index] = payload
      }
    })
  },

  deleteContact (state, payload) {
    state.allContacts = state.allContacts.filter(row => row.contact_id !== payload.contact_id)
  },

  getAllContacts (state, payload) {
    state.allContacts = payload;
  }
}

const actions = {
  selectContact ({ commit }, payload) {
    commit('selectContact', payload)
  },
  saveContact({ commit, dispatch }, payload) {
    let response = '';
    try {
      if (payload.contact_id != null) {
        response = services.updateContact(payload);
        commit('update', payload);
      } else {
        payload = {...payload, contact_id: uuidv1()};
        response = services.addContact(payload);
        commit('create', payload);
      }
      console.log("contact id ",payload.contact_id);
      dispatch('selectContact', payload);
    }
    catch (e) {
      store.dispatch('toasts/showToast',{message : e} );
    }
    return response.message;
  },

  deleteContact ({ commit }, payload) {
    try {
      const response = services.deleteContact(payload);
      commit('deleteContact', payload)
      commit('selectContact', null)
      return response.message;
    }
    catch (e) {
      store.dispatch('toast/showToast',{message : e} );
    }
    
  },

  async getAllContacts ({commit}) {
    try {
      const contacts = services.getAllContacts();
      commit('getAllContacts', contacts);
    }
    catch (e) {
      store.dispatch('toast/showToast',{message : e} );
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
