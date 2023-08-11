<script>
export default {
  name: "Comment",
  props: {
    comment: Object,
    default: () => {},
  },
  computed: {
    isUser() {
      return localStorage.getItem("user_id");
    },
  },
};
</script>

<template>
  <a-card class="comment" :bordered="false">
    <a-comment>
      <template #author>{{ comment.user.name }}</template>
      <template #content>
        <p>
          {{ comment.content }}
        </p>
        <a-button
          v-if="isUser == comment.user.id"
          type="primary"
          @click="$emit('editComment', comment.id)"
          >Edit comment</a-button
        >
      </template>
    </a-comment>
  </a-card>
</template>

<style scoped>
button {
  margin-top: 2rem;
  align-self: flex-end;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #cbcdd0;
}
</style>
