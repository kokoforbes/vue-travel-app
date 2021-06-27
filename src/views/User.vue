<template>
  <div>
    <h1>Welcome {{ user }}</h1>

    <p>
      <router-link
        :to="{
          name: 'Invoices',
        }"
        >Invoices</router-link
      >
    </p>

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
