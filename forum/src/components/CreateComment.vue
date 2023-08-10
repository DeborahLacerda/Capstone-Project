<script>
export default {
  data: () => ({
    comment: "",
  }),
};
</script>

<template>
  <a-card class="comment" :bordered="false" title="New comment">
    <a-comment>
      <template #content>
        <a-textarea
          v-model:value="comment"
          :rows="4"
          placeholder="Content.."
          allow-clear
        />
        <a-button type="Primary" @click="$emit('newComment', comment)"
          >Post</a-button
        >
      </template>
    </a-comment>
  </a-card>
</template>

<style scoped>
.comment {
  margin-bottom: 20px;
}
button {
  margin-top: 10px;
}
</style>
