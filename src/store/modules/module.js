import axios from "@/axios";

const state = {
  user: {},
  products: [],
  cart: [],
  favourite: [],
  address: [],
};

const getters = {
  newUser: (state) => state.user,
  allProducts: (state) => state.products,
  allCartItems: (state) => state.cart,
  allFavItems: (state) => state.favourite,
  allAddress: (state) => state.address,
};

const actions = {
  async getAllProducts({ commit }) {
    try {
      const response = await axios.get(`showall`);
      commit("setProducts", response.data.data);
    } catch (error) {
      console.error(error);
    }
  },
  async getAllCartItems({ commit }) {
    try {
      const response = await axios.get(`showcard`);
      commit("setCart", response.data.data);
    } catch (error) {
      console.error(error);
    }
  },
  async addToCart({ commit }, data) {
    try {
      if (this.state.cart === undefined) {
        this.state.cart = [];
        const response = await axios.post(`addtocart`, data);
        commit("addItemCart", response.data.data);
      } else {
        const response = await axios.post(`addtocart`, data);
        commit("addItemCart", response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  },
  async deleteFromCart({ commit }, id) {
    try {
      const response = await axios.get(`deletcart/${id}`);
      commit("deleteItemCart", response.data.data);
    } catch (error) {
      console.error(error);
    }
  },
  async getAllFavourite({ commit }) {
    try {
      const response = await axios.get(`showfavourites`);
      commit("setFavourite", response.data.data);
    } catch (error) {
      console.error(error);
    }
  },
  async getAllAddress({ commit }) {
    try {
      const response = await axios.get(`address`);
      commit("setAddress", response.data.data);
    } catch (error) {
      console.error(error);
    }
  },
  async getUser({ commit }) {
    try {
      const response = await axios.post(`user-detail`);
      commit("setUser", response.data.data);
    } catch (error) {
      console.error(error);
    }
  },
};

const mutations = {
  setUser: (state, response) => (state.user = response),
  setProducts: (state, response) => (state.products = response),
  setCart: (state, response) => (state.cart = response),
  addItemCart: (state, response) => state.cart.push(response),
  deleteItemCart: (state, response) =>
    state.cart.filter((item) => item.id !== response.id),
  setFavourite: (state, response) => (state.favourite = response),
  setAddress: (state, response) => (state.address = response),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
