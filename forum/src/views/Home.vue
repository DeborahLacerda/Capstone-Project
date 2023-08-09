<script>
import Post from "../components/Post.vue";

export default {
  components: {
    Post,
  },
  computed: {
    // getPosts() {
    //   return this.$store.getters.getPosts;
    // },
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
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
