import axios from 'axios'
const url = 'http://localhost:8080/users'

class AuthenticationService {
    signUp =  (userData) => {
        return axios.post(`${url}/signUp`, userData)
    }

    signIn = (userData) => {
        return axios.post(`${url}/signIn`, userData)
    }
}

export default new AuthenticationService();