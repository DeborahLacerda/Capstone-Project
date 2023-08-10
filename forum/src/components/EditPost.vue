<script>
export default {
  props: {
    currentPost: Object,
    default: () => {},
  },
  data: () => ({
    post: {
      title: "",
      content: "",
    },
  }),
  beforeMount() {
    this.post.title = this.currentPost.title;
    this.post.content = this.currentPost.content;
  },
  methods: {},
};
</script>
<template>
  <div class="card">
    <div class="title">
      <a-typography-title :level="2">Edit post </a-typography-title>
      <a-button type="link" @click="$emit('delete')">Remove post</a-button>
    </div>

    <a-card :bordered="false">
      <template #title>
        <a-input v-model:value="post.title" placeholder="Title" allow-clear />
      </template>

      <a-textarea
        v-model:value="post.content"
        :rows="4"
        placeholder="Content.."
        allow-clear
      />
    </a-card>

    <div>
      <a-button class="cancel" type="primary" @click="$emit('post', this.post)"
        >Edit</a-button
      >
      <a-button type="primary" @click="$emit('cancel')">Cancel</a-button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #ececec;
  padding: 30px;
}
button {
  margin-top: 10px;
}
.cancel {
  margin-right: 5px;
}

.title {
  display: flex;
  justify-content: space-between;
}
</style>
