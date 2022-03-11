<template>
  <div>
    <div v-if="!User">
      WELCOME TO MY WEBSITE <br />
      <a href="https://backend-laravel.herokuapp.com/login">Login here</a>
    </div>
    <div v-if="User">
      <h1>Welcome, {{ User.name }}</h1>
      <button @click="logout()">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CookiesService from "../services/cookies.service";
const cookiesService = CookiesService.getService();
export default {
  computed: {
    ...mapGetters({ User: "StateUser" }),
  },

  methods: {
    ...mapActions(["LogOut"]),
    async logout() {
      try {
        const token = cookiesService.getToken();
        const header = {
          Authorization: "Bearer " + token,
        };
        await this.LogOut(header);
        this.$router.push("/login");
      } catch (error) {
        console.log(error)
      }

    },
  },
};
</script>

<style>
</style>