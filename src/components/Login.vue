<template>
    <div class="login">
        <div class="wrapper">
            <h2>WELCOME</h2>
            <div><input type="text" placeholder="email" class="heightt"></div>
            <div><input type="text" placeholder="password" class="heightt"></div>
        
            <button type="submit" class="btn-login heightt">Login</button>
            <div class="social">
                <div><a href="#facebook" class="facebook">Facebook</a></div>
                <div><a href="#google" class="google">Google</a></div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    
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

/* .login {
    display: flex;
    justify-content: center;
} */
.social {
    display: flex;
    /* justify-content: center; */
    /* justify-content: space-between; */
    width: 300;
    margin-left: 45px;
}

.btn-login {
    background-color: #468eaf;
    /* width: 160px; */
    margin: 0 auto;
    border: 0px;
    /* width: 300px; */
}
#app {
    width:100%;

    display: grid;
    place-items: center;
    height: 100%;
}

.wrapper { 
    width: 400px;
    /* border: 1px solid gray; */
    padding: 100px;
    background-color: #f2f2f2;
    /* margin: 20px; */
}  

.facebook {
    display: block;
    width: 150px;
    background-color: #4695ff;
    text-decoration: none;
    height: 40px;
    margin-right: 10px;
    line-height: 40px;
}

.google {
   display: block;
    background-color: #e94236;
    width: 150px;
    text-decoration: none;
    height: 40px;
    line-height: 40px;
}

.heightt {
    height: 40px;
    width: 300px;
    margin-bottom: 25px;
}
</style>