<script>
import Post from "../components/Post.vue";
import Comment from "../components/Comment.vue";

export default {
  components: {
    Post,
    Comment,
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
    comments() {
      return this.$store.state.comments;
    },
  },
  beforeCreate() {
    this.$store.dispatch("getPost", this.$route.params.id).then((res) => {
      if (res) {
        this.$store.dispatch("fetchComments", this.$route.params.id);
      }
    });
  },
  methods: {},
};
</script>

<template>
  <div class="posts">
    <div class="post">
      <Post :post="post" />
    </div>

    <a-typography-title :level="2">Comments</a-typography-title>

    <div class="comments" v-for="comment in comments" :key="comment.id">
      <Comment :comment="comment" />
    </div>
  </div>
</template>

<style scoped>
.post {
  margin-block: 20px;
}
</style>
