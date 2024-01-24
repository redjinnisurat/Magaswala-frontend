import axios from "@/axios";

const state = {
  user: {},
  products: [],
  cart: [],
  favourite: [],
  address: [],
  orders: [],
  homeAdd_id: null,
  feedbacks: [],
  total_price: 0,
};

const getters = {
  newUser: (state) => state.user,
  allProducts: (state) => state.products,
  allCartItems: (state) => state.cart,
  allFavItems: (state) => state.favourite,
  allAddress: (state) => state.address,
  allOrders: (state) => state.orders,
  homeAddId: (state) => state.homeAdd_id,
  allFeedbacks: (state) => state.feedbacks,
  total_price: (state) => state.total_price,
};

const actions = {
  async getAllProducts({ commit }) {
    try {
      const response = await axios.get(`showall`);
      commit("setProducts", response.data.data || []);
    } catch (error) {
      console.error(error);
    }
  },
  async getAllCartItems({ commit }) {
    try {
      const response = await axios.get(`showcard`);
      commit("setCart", response.data.data || []);
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
      commit("setFavourite", response.data.data || []);
    } catch (error) {
      console.error(error);
    }
  },
  async getAllAddress({ commit }) {
    try {
      const response = await axios.get(`address`);
      // console.log("Response: ", response.data);
      commit("setAddress", response.data.data || []);
    } catch (error) {
      console.error(error);
    }
  },
  getAddressId({ commit, getters }) {
    let add_id = null;
    getters.allAddress.forEach((item) => {
      if (item.address.address_type == 0) {
        add_id = item.address.id;
      }
    });

    commit("setAddId", add_id);
  },
  async getUser({ commit }) {
    try {
      const response = await axios.post(`user-detail`);
      commit("setUser", response.data.data);
    } catch (error) {
      console.error(error);
    }
  },
  async getOrder({ commit }) {
    try {
      const response = await axios.get(`orderhistory`);
      commit("setOrders", response.data.data || []);
    } catch (error) {
      console.error(error);
    }
  },
  async getAllFeedback({ commit }) {
    try {
      const response = await axios.get(`showfeedbackall`);
      commit("setFeedbacks", response.data.data || []);
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
  setOrders: (state, response) => (state.orders = response),
  setAddId: (state, response) => (state.homeAdd_id = response),
  setFeedbacks: (state, response) => (state.feedbacks = response),
  updateTotalPrice(state, totalPrice) {
    if (totalPrice != null) {
      state.total_price = totalPrice;
      // console.log("Total Price: ", state.total_price);
    } else {
      state.total_price = state.cart.length > 0 ? state.cart[0].Total_price : 0;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
