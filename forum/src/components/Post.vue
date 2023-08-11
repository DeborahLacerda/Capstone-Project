<script>
export default {
  name: "Post",
  props: {
    post: Object,
    default: () => {},
  },
  computed: {
    isUser() {
      return localStorage.getItem('user_id')
    }
  }
};
</script>

<template>
  <a-card
    :title="post.title"
    :bordered="false"
    class="post"
    @click="$emit('postClicked', post.id)"
  >
    <a-comment>
      <!-- <template #actions>
          <span key="comment-basic-like">
            <a-tooltip title="Like">
              <template v-if="action === 'liked'">
                <LikeFilled @click="like" />
              </template>
              <template v-else>
                <LikeOutlined @click="like" />
              </template>
            </a-tooltip>
            <span style="padding-left: 8px; cursor: auto">
              {{ likes }}
            </span>
          </span>
          <span key="comment-basic-dislike">
            <a-tooltip title="Dislike">
              <template v-if="action === 'disliked'">
                <DislikeFilled @click="dislike" />
              </template>
              <template v-else>
                <DislikeOutlined @click="dislike" />
              </template>
            </a-tooltip>
            <span style="padding-left: 8px; cursor: auto">
              {{ dislikes }}
            </span>
          </span>
          <span key="comment-basic-reply-to">Reply to</span>
        </template> -->
      <template #author>{{ post.user.name }}</template>
      <template #content>
        <p>
          {{ post.content }}
        </p>
        <a-button v-if="isUser==post.user.id" type="primary" @click="$emit('editPost')">Edit post</a-button>
      </template>
      <!-- <template #datetime>
        <a-tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
          <span>{{ dayjs().fromNow() }}</span>
        </a-tooltip>
      </template> -->
    </a-comment>
  </a-card>
</template>

<style scoped>
.post {
  border-radius: 5px;
  margin-top: 20px;
  padding: 5px;
  transition: box-shadow 0.3s;

}
.post:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
button {
  margin-top: 2rem;
}
</style>
