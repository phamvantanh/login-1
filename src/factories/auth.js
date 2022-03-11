const baseUrl = 'https://backend-laravel.herokuapp.com/api/auth'
const AuthApis = {
  LOGIN: `${baseUrl}/login`,

  REGISTER: `${baseUrl}/register`,

  USER_PROFILE: `${baseUrl}/user-profile`,

  LOGOUT:  `${baseUrl}/logout`
}

export default AuthApis
