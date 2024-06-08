import { createStore } from 'vuex';

const store = createStore({
    state: {
    // Define your state here
    },
    mutations: {
    // Define your mutations here
    },
    actions: {
    // Define your actions here
    },
    modules: {
    // Define your modules here
    },
});

export default store;


// import Vue from 'vue';
// import Vuex from 'vuex';
// import axios from 'axios';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     state: {
//     user: null,
//     products: [],
//     orders: []
//     },
//     mutations: {
//     setUser(state, user) {
//     state.user = user;
//     },
//     setProducts(state, products) {
//     state.products = products;
//     },
//     setOrders(state, orders) {
//     state.orders = orders;
//     }
//     },
//     actions: {
//     async login({ commit }, credentials) {
//     const response = await axios.post('http://localhost:3000/api/auth/login', credentials);
//     commit('setUser', response.data.user);
//     },
//     async register({ commit }, user) {
//     const response = await axios.post('http://localhost:3000/api/auth/register', user);
//     commit('setUser', response.data.user);
//     },
//     async fetchProducts({ commit }) {
//     const response = await axios.get('http://localhost:3000/api/products');
//     commit('setProducts', response.data);
//     },
//     async fetchOrders({ commit }) {
//     const response = await axios.get('http://localhost:3000/api/orders');
//     commit('setOrders', response.data);
//     },
//     async addProduct({ dispatch }, product) {
//     await axios.post('http://localhost:3000/api/products', product);
//     dispatch('fetchProducts');
//     },
//     async deleteProduct({ dispatch }, productId) {
//     await axios.delete(`http://localhost:3000/api/products/${productId}`);
//     dispatch('fetchProducts');
//     },
//     async addOrder({ dispatch }, order) {
//     await axios.post('http://localhost:3000/api/orders', order);
//     dispatch('fetchOrders');
//     }
//     }
// });
