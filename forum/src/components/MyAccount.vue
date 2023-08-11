<script>
export default {
  props: {
    infor: Object,
    default: () => {},
  },
  data: () => ({
    formState: {
      email: "",
      name: "",
    },
  }),
  beforeMount() {
    this.formState = { ...this.infor };
  },
  methods: {},
};
</script>

<template>
  <div>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <a-form-item
        label="Name"
        name="name"
        :rules="[{ required: true, message: 'Please input your name!' }]"
      >
        <a-input v-model:value="formState.name" />
      </a-form-item>

      <a-form-item
        label="Email"
        name="email"
        :rules="[{ required: true, message: 'Please input your email!' }]"
      >
        <a-input v-model:value="formState.email" />
      </a-form-item>

      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          @click="$emit('editUser', formState)"
          >Edit</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
