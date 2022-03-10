<template>
    <div class="login">
        <div class="wrapper">
            <h1>WELCOME</h1>
            <div><input type="text" v-model="email" style ="padding-left: 18px; " placeholder="Email" class="heightt-input"></div>
            <div><input type="password"  v-model="password" style ="padding-left: 18px;" placeholder="Password" class="heightt-input"></div>
        
            <button  class="btn-login" @click="handleSubmit()">Login</button>
            <div class="social">
                <button class="facebook">Facebook</button>
                <button class="google">Google</button>
            </div>
            
        </div>
    </div>
</template>

<script>
import {  mapActions } from 'vuex'
// import axios from 'axios'
// import { Router } from 'express'
// import CookiesService from "../services/cookies.service";
// const cookiesService = CookiesService.getService();

export default {
    data () {
        return {
                email: '',
                password: '',
        }
    },
    // computed: {
    //     ...mapState('account', ['status'])
    // },
    // created () {
    //     this.logout();
    // },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleSubmit () {
            // this.submitted = true;
            const { email, password } = this;
            if (email && password) {
                this.login({ email, password })
            }
        }
    //     login(){
    //         console.log(this.user)
    //         axios.post("http://127.0.0.1:8000/api/auth/login", this.user)
    // .then(response => {
        
    //     console.log(response.data)
    //     this.$router.push('/')
    //     cookiesService.setToken(response.data.access_token);
    // })
    
    // .catch(error => {
    // //   this.errorMessage = error.message;
    //   alert("Login fail ! Try again")
    //   console.error("There was an error!", error);
    //   this.user.email = "";
    //   this.user.password=""
    // });
    //     }
    }
}
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
    width:100%;
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
    /* height: 40px; */
    /* line-height: 40px; */
    border-radius: 3px;
    color: white;
    border-width: 0px

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