<script>
import CreateUser from "../components/CreateUser.vue";

export default {
  components: {
    CreateUser,
  },
  methods: {
    create(userInfor) {
      this.$store.dispatch("createUser", userInfor).then((res) => {
        if (res) {
          this.$router.push({path: '/'})
        }
      });
    },
    cancel(){
      this.$router.push({path: '/'})
    }
  },
};
</script>

<template>
  <CreateUser @createForm="create($event)"
   @cancel="cancel()"/>
</template>

<style scoped></style>
