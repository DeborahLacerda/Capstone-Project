<script>
import Post from "../components/Post.vue";

export default {
  components: {
    Post,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.$store.dispatch("fetchPosts");
    } else {
      this.$router.push({ path: "/login" });
    }
  },
  methods: {
    goToPostDetails(id) {
      this.$router.push({
        path: `/post/${id}`,
      });
    },
  },
};
</script>

<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id">
      <Post :post="post" @postClicked="goToPostDetails($event)" />
    </div>
  </div>
</template>

<style scoped></style>
