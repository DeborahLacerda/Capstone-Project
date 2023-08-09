<script>
import CreatePost from "../components/CreatePost.vue";

export default {
  components: {
    CreatePost,
  },
  methods: {
    sendPost(post) {
      this.$store.dispatch("createPosts", { post: post }).then((res) => {
        if (res) {
          this.$router.push({
            path: "/",
          });
        }
      });
    },
  },
};
</script>

<template>
  <CreatePost @post="sendPost($event)" />
</template>

<style scoped></style>
