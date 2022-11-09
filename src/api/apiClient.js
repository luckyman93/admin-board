import axios from 'axios'
import '../firebase/firebase';
import { 
    getAuth,
    signOut,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
} from 'firebase/auth'

const baseUrl_1 = 'https://group-service-pth7oyojla-an.a.run.app'

export const apiClient = {

    // Login Process
    async login(email, password) {
        const authentication = getAuth()
        let result

        await signInWithEmailAndPassword(authentication, email, password)
            .then((response) => {
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

    // sign out
    async signOut() {
        const authentication = getAuth()

        await signOut(authentication)
    },

    // Reset Password Process
    async resetPw(email) {
        const authentication = getAuth()
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