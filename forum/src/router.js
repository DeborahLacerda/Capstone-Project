import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/views/Home.vue";
import CreatePost from "../src/views/CreatePost.vue";
import DetailsPost from "../src/views/DetailsPost.vue";
import Login from "../src/views/Login.vue";

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
  ],
});
