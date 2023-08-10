<script>
import CreateUser from "../components/CreateUser.vue";

export default {
  components: {
    CreateUser,
  },
  methods: {
    create(userInfor) {
      this.$store.dispatch("createUser", userInfor);
    },
  },
};
</script>

<template>
  <CreateUser @createForm="create($event)" />
</template>

<style scoped></style>
