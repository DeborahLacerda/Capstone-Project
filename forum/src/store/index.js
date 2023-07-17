import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
  },

  getters: {
    getUsers: (state) => state.users,
  },

  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get("http://127.0.0.1:8000/api/users");
        commit("SET_USERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
});
