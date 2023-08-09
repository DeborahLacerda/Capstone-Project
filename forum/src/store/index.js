import { createStore } from "vuex";
import axios from "axios";

const token = "2|nytnonmMDbNOn7Sz9WKK0FtenGrTZISoQJenlGvP";

export default createStore({
  state: {
    users: [],
    posts: [],
    post: null,
    comments: [],
  },

  getters: {
    getUsers: (state) => state.users,
    getPosts: (state) => state.posts,
    getComments: (state) => state.comments,
  },

  actions: {
    async fetchUsers({ commit }) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const data = await axios.get("http://127.0.0.1:8000/api/users", config);
        commit("SET_USERS", data.data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchPosts({ commit }) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const data = await axios.get("http://127.0.0.1:8000/api/posts", config);
        commit("SET_POSTS", data.data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async createPosts({}, { post }) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        await axios.post(
          "http://127.0.0.1:8000/api/posts",
          { ...post },
          config
        );
        return true;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async editPosts({}, { post }) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        await axios.put(
          `http://127.0.0.1:8000/api/posts/${post.id}`,
          { ...post },
          config
        );
        return true;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async getPost({ commit }, id) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const data = await axios.get(
          `http://127.0.0.1:8000/api/posts/${id}`,
          config
        );
        commit("SET_SINGLE_POST", data.data.data);
        return true;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchComments({ commit }, id) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const data = await axios.get(
          `http://127.0.0.1:8000/api/post/${id}/comments`,
          config
        );
        commit("SET_COMMENTS", data.data.data);
        return true;
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
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_SINGLE_POST(state, post) {
      state.post = post;
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    },
  },
});
