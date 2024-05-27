import { createStore } from 'vuex';

export default createStore({
    state: {
    isAuthenticated: false,
    },
    mutations: {
    authenticate(state) {
        state.isAuthenticated = true;
    },
    logout(state) {
        state.isAuthenticated = false;
    },
    },
    actions: {
    login({ commit }) {
        commit('authenticate');
    },
    logout({ commit }) {
        commit('logout');
    },
    },
});
