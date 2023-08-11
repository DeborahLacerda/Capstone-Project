<script>
import MyAccount from "../components/MyAccount.vue";

export default {
  components: {
    MyAccount,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    updateUser(user) {
      console.log(user);
      this.$store.dispatch("editUser", user);
    },
  },
  beforeMount() {
    this.$store.dispatch("getUser", this.$route.params.id);
  },
};
</script>

<template>
  <MyAccount :infor="user" @editUser="updateUser($event)" />
</template>

<style scoped></style>
