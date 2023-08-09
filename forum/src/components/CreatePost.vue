<script>
export default {
  data: () => ({
    post: {
      title: "",
      content: "",
    },
  }),
  methods: {
    postData() {
      this.$emit("post", this.post);
    },
  },
};
</script>
<template>
  <div class="card">
    <a-typography-title :level="2">Create new post</a-typography-title>

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

    <a-button type="primary" @click="postData()">Create</a-button>
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
</style>
