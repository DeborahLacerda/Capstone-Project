import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/views/Home.vue";
import CreatePost from "../src/views/CreatePost.vue";
import CreateUser from "../src/views/CreateUser.vue";
import DetailsPost from "../src/views/DetailsPost.vue";
import Login from "../src/views/Login.vue";
import MyAccount from "../src/views/MyAccount.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/create-post",
      component: CreatePost,
    },
    {
      path: "/post/:id",
      component: DetailsPost,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: CreateUser,
    },
    {
      path: "/my-account/:id",
      component: MyAccount,
    },
  ],
});
