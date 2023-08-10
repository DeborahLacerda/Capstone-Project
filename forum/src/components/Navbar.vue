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
    goToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<template>
  <div class="nav">
    <p @click="goToHome()">Home</p>
    <div>
      <a-button type="primary" @click="click()">Create post</a-button>
      <a-button @click="goToLogin()">Login</a-button>
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
}
p {
  color: white;
  cursor: pointer;
}
button {
  margin-left: 10px;
}
</style>
