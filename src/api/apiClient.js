import axios from 'axios'
import '../firebase/firebase';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, getIdToken } from 'firebase/auth'

const authentication = getAuth();
const baseUrl = 'https://rontgen-service-pth7oyojla-an.a.run.app'

export const apiClient = {

    // Get access token
    getAstokenByRftoken() {
        return onAuthStateChanged(authentication, async (user) => {
            if (user) {
              const token = await getIdToken(user);
              return token
            }
        });
    },

    // Login Process
    async login(email, password) {

        return await signInWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                sessionStorage.setItem('Auth Token', response._tokenResponse.idToken)
                return response.operationType
            }).catch((error) => {
                return error.code
        })

    },

    // Reset Password Process
    async resetPw(email) {

        return await sendPasswordResetEmail(authentication, email)
            .then(()=>{
                return 'sent'
            }).catch((error)=>{
                return error.code
        })

    },
    
    // //Get group list
    getGroupList() {
        return new Promise(function (resolve, reject) {
          axios
            .get(baseUrl + '/v1/group', {
                headers: {"Authorization" : `Bearer ${sessionStorage.getItem('Auth Token')}`} 
              })
            .then(function (response) {
                console.log(response)
              resolve(response)
            })
            .catch(function (error) {
              reject(error)
            })
        })
      },
}