<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import CookiesService from "./services/cookies.service";
const cookiesService = CookiesService.getService();
import { mapActions } from "vuex";

export default {
  name: "app",
  components: {},

  methods: {
    ...mapActions(["getUserProfile"]),
  },

  beforeMount() {
    const token = cookiesService.getToken();
    if (token) {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      this.getUserProfile(userInfo);
    } else {
      localStorage.removeItem("user");
      this.$router.push("/login");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
