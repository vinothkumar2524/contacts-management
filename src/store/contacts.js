import uuidv1 from 'uuid/v1';
import services from "../services/contacts";

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
      console.log("id s ", state.con)
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
  async saveContact({ commit, dispatch }, payload) {
    let responseMsg = '';
      console.log("payeload ", payload)
    if (payload.contact_id != null) {
      try {
         const response = await services.updateContact(payload);
         console.log("update response ", response)
         responseMsg = await response.message;
         console.log("response message ", responseMsg)
         if(response.code === 0) {
          commit('update', payload)
          dispatch('selectContact', payload)
         } 
      }
      catch (error) {
        console.log(error);
      }
    } else {
      payload = {...payload, contact_id: uuidv1()}
      console.log("create payload ", payload);
      try {
        const response = await services.addContact(payload);
        responseMsg = response.message;
        if(response.code === 0) {
          console.log("adding")
          commit('create', payload)
          dispatch('selectContact', payload)
        }
        
      }
      catch (error) {
        console.log(error);
      }
      
    }

    return responseMsg;
  },

  deleteContact ({ commit }, payload) {
    console.log("delete contact ", payload)
    commit('deleteContact', payload)
    commit('selectContact', null)
  },

  async getAllContacts ({commit}) {
    try {
      const contacts = await services.getAllContacts();
      console.log("all contacts ", contacts);
      commit('getAllContacts', contacts);
    }
    catch (error) {
      console.log(error);
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
