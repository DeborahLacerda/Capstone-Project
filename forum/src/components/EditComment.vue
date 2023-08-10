<script>
export default {
  props: {
    currentComment: Object,
    default: () => {},
  },
  data: () => ({
    comment: "",
  }),
  beforeMount() {
    this.comment = this.currentComment.content;
  },
};
</script>

<template>
  <section class="comment">
    <div class="info">
      <a-typography-title :level="2">Edit comment </a-typography-title>
      <a-button type="link" @click="$emit('delete')">Remove comment</a-button>
    </div>

    <a-card :bordered="false">
      <a-comment>
        <template #content>
          <a-textarea
            v-model:value="comment"
            :rows="4"
            placeholder="Content.."
            allow-clear
          />
        </template>
      </a-comment>

      <div>
        <a-button
          class="cancel"
          type="primary"
          @click="$emit('comment', this.comment)"
          >Edit</a-button
        >
        <a-button type="primary" @click="$emit('cancel')">Cancel</a-button>
      </div>
    </a-card>
  </section>
</template>

<style scoped>
.comment {
  background-color: white;
  margin: 20px 0px;
  padding: 30px;
}
button {
  margin-left: 10px;
}
.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
