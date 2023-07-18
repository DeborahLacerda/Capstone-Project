import { createRouter, createWebHistory } from "vue-router";
import TheWelcome from "./components/TheWelcome.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TheWelcome,
    },
  ],
});
