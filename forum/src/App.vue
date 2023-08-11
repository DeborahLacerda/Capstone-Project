<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("logout").then((res) => {
        if (res) {
          this.$router
            .push({
              path: "/",
            })
            .then(() => {
              this.$router.go();
            });
        }
      });
    },
  },
};
</script>

<template>
  <a-layout class="site-layout-content">
    <a-layout-header>
      <Navbar @logout="logoutUser()" />
    </a-layout-header>

    <a-layout-content class="content">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.site-layout-content {
  min-height: 100vh;
  padding: 0 0 24px 0;
  background: #f1f1f1;
}

.content {
  padding: "24px";
  min-height: "280px";
  margin: 20px;
  padding: 20px;
}
</style>
