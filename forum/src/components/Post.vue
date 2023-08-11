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
      
      <template #author>{{ post.user.name }}</template>
      <template #content>
        <p>
          {{ post.content }}
        </p>
        <a-button v-if="isUser==post.user.id" type="primary" @click="$emit('editPost')">Edit post</a-button>
      </template>
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
  align-self: flex-end;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #cbcdd0;
}

</style>
