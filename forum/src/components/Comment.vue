<script>
export default {
  name: "Comment",
  props: {
    comment: Object,
    default: () => {},
  },
};
</script>

<template>
  <a-card class="comment" :bordered="false">
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
      <template #author>{{ comment.user.name }}</template>
      <template #content>
        <p>
          {{ comment.content }}
        </p>
        <a-button type="primary" @click="$emit('editComment', comment.id)"
          >Edit comment</a-button
        >
      </template>
      <!-- <template #datetime>
        <a-tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
          <span>{{ dayjs().fromNow() }}</span>
        </a-tooltip>
      </template> -->
    </a-comment>
  </a-card>
</template>

<style scoped></style>
