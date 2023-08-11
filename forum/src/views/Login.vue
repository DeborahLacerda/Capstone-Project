<script>
import Login from "../components/Login.vue";

export default {
  components: {
    Login,
  },
  methods: {
    login(userInfor) {
      this.$store.dispatch("login", userInfor).then((res) => {
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
  <Login @loginForm="login($event)" />
</template>

<style scoped></style>
