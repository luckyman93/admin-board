import '../firebase/firebase';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'

export const apiClient = {
    constructor() {
    },
    // Login Process
    async login(email, password) {

        const authentication = getAuth();

        return await signInWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                return response.operationType
            }).catch((error) => {
                return error.code
        })

    },

    // Reset Password Process
    async resetPw(email) {

        const authentication = getAuth();

        return await sendPasswordResetEmail(authentication, email)
            .then(()=>{
                return 'sent'
            }).catch((error)=>{
                return error.code
        })

    }
}