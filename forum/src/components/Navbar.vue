<script>
export default {
  data: () => ({}),
  computed: {
    token() {
      return localStorage.getItem("token");
    },
    userId() {
      return localStorage.getItem("user_id");
    },
  },
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
    goToAccount() {
      this.$store.dispatch("getUser", this.userId).then((res) => {
        if (res) {
          this.$router.push({ path: `/my-account/${this.userId}` });
        }
      });
    },
  },
};
</script>
<template>
  <div class="nav">
    <img src="../assets/logo.png" alt="" />
    <div v-if="userId">
      <a-button type="primary" @click="click()">Create post</a-button>

      <a-button @click="$emit('logout')">Logout</a-button>

      <a-button @click="goToAccount()">My Account</a-button>
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

img {
  width: 85px;
}
</style>
