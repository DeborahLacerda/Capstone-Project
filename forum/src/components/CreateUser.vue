<script>
export default {
  data: () => ({
    formState: {
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
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

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item
        label="Password Confirmation"
        name="password_confirmation"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password_confirmation" />
      </a-form-item>

      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          @click="$emit('createForm', formState)"
          >Submit</a-button
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
button {
}
</style>
