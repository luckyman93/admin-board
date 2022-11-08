import axios from 'axios'
import '../firebase/firebase';
import { 
    getAuth,
    getIdToken,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
} from 'firebase/auth'

const authentication = getAuth()
const baseUrl = 'https://rontgen-service-pth7oyojla-an.a.run.app'
// var token

export const apiClient = {

    // Login Process
    async login(email, password) {
        let result

        await signInWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                result = { 
                    auth : true,
                }
            }).catch((error) => {
                result = { 
                    auth : false,
                }
            })
        return result
    },

    // Reset Password Process
    async resetPw(email) {
        let result

        await sendPasswordResetEmail(authentication, email)
            .then(()=>{
                result = {
                    sent :  true,
                    message : 'sent'
                }
            }).catch((error)=>{
                result = {
                    sent : false,
                    message: error.code
                }
            })
        return result
    },

    // //Get group list
    async getGroupList() {
        let token;
        onAuthStateChanged(authentication, async (user) => {
            if (user) {
               token = await getIdToken(user);
            }
            console.log(token)
            return new Promise(function (resolve, reject) {
                axios
                  .get(baseUrl + '/v1/group', {
                      headers: {"Authorization" : `Bearer ${token}`} 
                    })
                  .then(function (response) {
                      console.log(response)
                    resolve(response)
                  })
                  .catch(function (error) {
                    reject(error)
                  })
            })
        })
    }
}