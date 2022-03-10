// import config from 'config';
// import { authHeader } from '../helpers';
// import Cookies from 'js-cookie'
import axios from 'axios'
// import { Router } from 'express'
// import CookiesService from "../services/cookies.service";
// const cookiesService = CookiesService.getService();
export const userService = {
    login,
    
};

function login(email, password) {
    var userInfo = {
      email : email,
      password : password
    }
    console.log(userInfo)
    try {
      const response = axios.post("http://127.0.0.1:8000/api/auth/login",userInfo)
      if(response) {
        console.log(response)
          // this.$router.push('/')
          // cookiesService.setToken(response.data.access_token);
      }   
    }catch(error) {
    //   this.errorMessage = error.message;
      alert("Login fail ! Try again")
      console.error("There was an error!", error);
      // this.user.email = "";
      // this.user.password=""
    }
}


// function logout() {
//     // xoá user từ local storage để log out
//     localStorage.removeItem('user');
// }

// function register(user) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
// }

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }


// function getById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
// }

// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // tự động logout nếu response 401 được trả về từ api
//                 logout();
//                 location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }
