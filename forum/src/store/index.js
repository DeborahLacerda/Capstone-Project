import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
    user: {},
    token: localStorage.getItem("token") || "",
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
    async login({ commit }, userInfor) {
      try {
        const data = await axios.post("http://127.0.0.1:8000/login", {
          email: userInfor.email,
          password: userInfor.password,
        });
        //rever
        console.log(data.data);
        commit("SET_LOGGED_USER_ID", data.data.user_id);
        commit("SET_TOKEN", data.data.token);
        return true;
      } catch (error) {
        alert(error);
      }
    },
    async createUser({ commit }, userInfor) {
      try {
        const data = await axios.post("http://127.0.0.1:8000/register", {
          ...userInfor,
        });
        commit("SET_LOGGED_USER_ID", data.data.user_id);
        commit("SET_TOKEN", data.data.token);
        return true;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchUsers({ commit, state }) {
      const config = {
        headers: { Authorization: `Bearer ${state.token}` },
      };
      try {
        const data = await axios.get("http://127.0.0.1:8000/api/users", config);
        commit("SET_USERS", data.data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchPosts({ commit, state }) {
      const config = {
        headers: { Authorization: `Bearer ${state.token}` },
      };
      try {
        const data = await axios.get("http://127.0.0.1:8000/api/posts", config);
        commit("SET_POSTS", data.data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async createPosts({ state }, { post }) {
      const config = {
        headers: { Authorization: `Bearer ${(state, token)}` },
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
    async editPost({ state }, { post }) {
      const config = {
        headers: { Authorization: `Bearer ${state.token}` },
      };
      try {
        await axios.put(
          `http://127.0.0.1:8000/api/posts/${post.id}`,
          { ...post },
          config
        );
        return true;
      } catch (error) {
        alert(error.response.data.error);
        console.log(error);
      }
    },
    async getPost({ commit, state }, id) {
      const config = {
        headers: { Authorization: `Bearer ${state.token}` },
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
    async deletePost({ commit, state }, id) {
      const config = {
        headers: { Authorization: `Bearer ${state.token}` },
      };
      try {
        await axios.delete(`http://127.0.0.1:8000/api/posts/${id}`, config);
        return true;
      } catch (error) {
        alert(error.response.data.error);
        console.log(error);
      }
    },
    async fetchComments({ commit, state }, id) {
      const config = {
        headers: { Authorization: `Bearer ${state.token}` },
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
    async createComments({ state }, { infor }) {
      const config = {
        headers: { Authorization: `Bearer ${state.token}` },
      };
      try {
        await axios.post(
          `http://127.0.0.1:8000/api/post/${infor.post_id}/comments`,
          { ...infor },
          config
        );
        return true;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async editComments({ commit, state }, infor) {
      const config = {
        headers: { Authorization: `Bearer ${state.token}` },
      };
      try {
        await axios.put(
          `http://127.0.0.1:8000/api/comments/${infor.id}`,
          { ...infor },
          config
        );
        return true;
      } catch (error) {
        alert(error.response.data.error);

        console.log(error);
      }
    },
    async deleteComment({ commit, state }, id) {
      const config = {
        headers: { Authorization: `Bearer ${state.token}` },
      };
      try {
        await axios.delete(`http://127.0.0.1:8000/api/comments/${id}`, config);
        return true;
      } catch (error) {
        alert(error.response.data.error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_LOGGED_USER_ID(state, id) {
      localStorage.setItem("user_id", id);
      state.user = user;
    },
    SET_TOKEN(state, token) {
      localStorage.setItem("token", token);
      state.token = token;
    },
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
