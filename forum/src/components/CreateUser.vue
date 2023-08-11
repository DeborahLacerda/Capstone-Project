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
  methods: {},
};
</script>

<template>
  <div>
    <a-typography-title :level="2">Register</a-typography-title>

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

      <a-form-item class="centre_login">
        <a-button
          type="primary"
          html-type="submit"
          @click="$emit('createForm', formState)"
          >Create</a-button
        >
        <a-button
          type="link"
          @click="$emit('cancel')"
          >Cancel</a-button
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

.centre_login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
