<template>
  <span class="go-back">
    <button @click="goBack()">go back</button>
  </span>
</template>

<script>
export default {
  name: "GoBack",
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
}

button {
  border: 2px solid rosybrown;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}
</style>
