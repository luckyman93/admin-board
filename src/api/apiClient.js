import axios from 'axios'
import '../firebase/firebase';
import { 
    getAuth,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
} from 'firebase/auth'

const authentication = getAuth()
const baseUrl_1 = 'https://group-service-pth7oyojla-an.a.run.app'

export const apiClient = {

    // Login Process
    async login(email, password) {
        let result

        await signInWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                result = { 
                    auth : true,
                    message: response.operationType
                }
            }).catch((error) => {
                result = { 
                    auth : false,
                    message : error.code
                }
            })
        return result
    },

    // Reset Password Process
    async resetPw(email) {
        let result

        await sendPasswordResetEmail(authentication, email)
            .then(()=>{
                result = { sent :  true }
            }).catch((error)=>{
                result = { sent : false }
            })
        return result
    },

    // Get group list
    async getGroupList(token) {
        return new Promise(function (resolve, reject) {
            axios
                .get(baseUrl_1 + '/v1/group', {
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${token}`
                    } 
                })
                .then(function (response) {
                resolve(response)
                })
                .catch(function (error) {
                reject(error)
                })
        })
    }
}