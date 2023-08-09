<script>
export default {
  data: () => ({}),
  methods: {
    click() {
      this.$router.push({
        path: "/create-post",
      });
    },
    goToLogin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
<template>
  <div class="nav">
    <a-button type="primary" @click="click()">Create post</a-button>
    <a-button @click="goToLogin()">Login</a-button>
  </div>
</template>

<style scoped>
.nav {
  text-align: right;
}
button {
  margin-left: 10px;
}
</style>
