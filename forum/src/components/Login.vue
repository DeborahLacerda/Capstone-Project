<script>
export default {
  data: () => ({
    formState: {
      username: "",
      password: "",
    },
  }),
  methods: {
    onFinishFailed(errorInfo) {
      console.log("Failed:", errorInfo);
    },
    onFinish(values) {
      console.log("Success:", values);
    },
  },
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
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
button {
}
</style>
