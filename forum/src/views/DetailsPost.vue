<script>
import Post from "../components/Post.vue";
import Comment from "../components/Comment.vue";
import CreateComment from "../components/CreateComment.vue";
import EditPost from "../components/EditPost.vue";
import EditComment from "../components/EditComment.vue";

export default {
  components: {
    Post,
    Comment,
    CreateComment,
    EditPost,
    EditComment,
  },
  data: () => ({
    showCreateComment: false,
    showEditPost: false,
    showEditComment: false,
    currentEditCommentId: 0,
  }),
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
        this.showCreateComment = false;
      }
    });
  },
  methods: {
    createNewComment(comment) {
      this.$store
        .dispatch("createComments", {
          infor: { post_id: this.$route.params.id, content: comment },
        })
        .then((res) => {
          if (res) {
            this.$store.dispatch("fetchComments", this.$route.params.id);
            this.showCreateComment = false;
          }
        });
    },
    editPost(post) {
      this.$store
        .dispatch("editPost", {
          post: { ...post, id: this.$route.params.id },
        })
        .then((res) => {
          if (res) {
            this.$store.dispatch("getPost", this.$route.params.id);
            this.showEditPost = false;
          }
        });
    },
    deletePost() {
      this.$store.dispatch("deletePost", this.$route.params.id).then((res) => {
        if (res) {
          this.$router.push({ path: "/" });
        }
      });
    },
    showCommment(id) {
      this.showEditComment = true;
      this.currentEditCommentId = id;
    },
    editComment(comment) {
      this.$store.dispatch("editComments", comment).then((res) => {
        if (res) {
          this.$store.dispatch("fetchComments", this.$route.params.id);
          this.showEditComment = false;
          this.currentEditCommentId = 0;
        }
      });
    },
    deleteComment(id) {
      this.$store.dispatch("deleteComment", id).then((res) => {
        if (res) {
          this.$store.dispatch("fetchComments", this.$route.params.id);
        }
      });
    },
  },
};
</script>

<template>
  <div v-if="post" class="posts">
    <section>
      <Post v-if="!showEditPost" :post="post" @editPost="showEditPost = true" />

      <EditPost
        v-else
        :currentPost="post"
        @cancel="showEditPost = false"
        @post="editPost($event)"
        @delete="deletePost()"
      />
    </section>

    <section class="infor">
      <a-typography-title :level="2">Comments</a-typography-title>

      <a-button type="link" @click="showCreateComment = true"
        >Create new comment</a-button
      >
    </section>

    <CreateComment
      v-if="showCreateComment"
      @newComment="createNewComment($event)"
    />
    <section>
      <div>
        <div v-for="comment in comments" :key="comment.id">
          <Comment
            v-if="currentEditCommentId != comment.id"
            :comment="comment"
            @editComment="showCommment($event)"
          />
          <EditComment
            v-else-if="currentEditCommentId == comment.id && showEditComment"
            :currentComment="comment"
            @cancel="
              showEditComment = false;
              currentEditCommentId = 0;
            "
            @comment="editComment({ content: $event, id: comment.id })"
            @delete="deleteComment(comment.id)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.post {
  margin-bottom: 20px;
}
.infor {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
