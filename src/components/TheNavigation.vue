<template>
  <div id="nav">
    <p class="logo">Vue Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li
        class="links"
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link
          :to="{ name: 'DestinationDetails', params: { id: destination.id } }"
          >{{ destination.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "TheNavigation",
  data() {
    return {
      destinationId: this.$route.params.id,
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: rosybrown;
  font-weight: bold;
}
</style>
