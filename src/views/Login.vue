<template>
  <div class="login">
    <div class="wrapper">
      <h1>WELCOME</h1>
      <div>
        <input
          type="email"
          v-model.trim="user.email"
          style="padding-left: 18px"
          placeholder="Email"
          class="heightt-input"
          required
        />
      </div>
      <div>
        <input
          type="password"
          v-model.trim="user.password"
          style="padding-left: 18px"
          placeholder="Password"
          class="heightt-input"
          required
        />
      </div>
      <button class="btn-login" @click="login()">Login</button>
      <div class="social">
        <button class="facebook">Facebook</button>
        <button class="google">Google</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  created() {
    if (this.isAuthen) {
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters({ isAuthen: "isAuthenticated" }),
  },

  methods: {
    handleInput() {
      //eslint-disable-next-line
      var mailformat =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.user.email === "" || !this.user.password === "") {
        alert("Please enter the full information");
        return false;
      } else if (!this.user.email.match(mailformat)) {
        alert("Please enter an invalid email address!");
        return false;
      } else if (this.user.password.length < 6) {
        alert("Password not enough 6 characters");
        return false;
      } else {
        return true;
      }
    },
    ...mapActions(["LogIn"]),
    async login() {
      if (this.handleInput()) {
        try {
          await this.LogIn(this.user);
          this.$router.push("/");
        } catch (error) {
          if (error.response.status === 401) {
            alert("The Gmail or Password is Incorrect");
          } else {
            alert("An error has occurred! Try again");
          }
        }
        this.user.email = "";
        this.user.password = "";
      }
    },
  },
};
</script>

<style>
html {
  height: 100%;
}
body {
  background-color: #dbdbdb;
  height: 100%;
}

.social {
  display: flex;
  width: 300;
  margin-left: 45px;
}

.btn-login {
  background-color: #468eaf;
  margin: 0 auto;
  border: 0px;
  border-radius: 3px;
  color: white;
  width: 308px;
  padding: 0;
  height: 40px;
  width: 308px;
  margin-bottom: 25px;
}
#app {
  width: 100%;
  display: grid;
  place-items: center;
  height: 100%;
}

.wrapper {
  width: 400px;
  padding: 100px;
  background-color: #f2f2f2;
}

.facebook {
  display: block;
  width: 130px;
  background-color: #4695ff;
  height: 40px;
  margin-right: 50px;
  border-radius: 3px;
  color: white;
  border-width: 0px;
}

.google {
  display: block;
  background-color: #e94236;
  width: 130px;
  border-radius: 3px;
  color: white;
  border-width: 0px;
}

.heightt {
  height: 40px;
  width: 300px;
  margin-bottom: 25px;
}
.heightt-input {
  height: 40px;
  width: 285px;
  margin-bottom: 25px;
}
</style>