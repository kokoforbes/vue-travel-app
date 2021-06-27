<template>
  <div>
    <h1>Welcome {{ user }}</h1>

    <button class="btn" @click="logOut()">Log out</button>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "User",
  data() {
    return {
      user: store.user,
    };
  },
  methods: {
    logOut() {
      store.user = null;
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
