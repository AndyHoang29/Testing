//import { userService } from '../_services';
import { userAxiosService } from "../api_services/";

const state = {
  all: {},
};

export const actions = {
  getAll({ commit }) {
    commit('GET_ALL_REQUEST');

    return userAxiosService
      .getAll()
      .then((res) => commit('GET_ALL_SUCCESS', res.data))
      .catch((error) => commit('GET_ALL_FAILURE', error));
  }
};

 export const mutations = {
  GET_ALL_REQUEST(state) {
    state.all = { loading: true };
  },
  GET_ALL_SUCCESS(state, users) {
    state.all = { items: users };
  },
  GET_ALL_FAILURE(state, error) {
    state.all = { error };
  }
};

export const users = {
  namespaced: true,
  state,
  actions,
  mutations,
};
export default {
  state,
  actions,
  mutations
};
