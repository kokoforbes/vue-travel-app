<template>
  <div class="login">
    <h1>login</h1>

    <div class="form">
      <label for="username">Username</label>
      <input type="text" v-model="username" name="username" class="input" />
      <label for="password">Password</label>
      <input type="password" v-model="password" name="password" class="input" />
      <button class="btn" @click="login()">Login</button>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
    };
  },

  methods: {
    login() {
      store.user = this.username;
      const redirectPath = this.$route.query.redirect || "/";
      this.$router.push(redirectPath);
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

.form input {
  padding: 5px 0;
  margin-bottom: 15px;
}
</style>
