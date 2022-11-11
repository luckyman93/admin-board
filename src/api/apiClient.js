import axios from 'axios'
import '../firebase/firebase';
import { 
    getAuth,
    signOut,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
} from 'firebase/auth'

const baseUrl_1 = 'https://group-service-pth7oyojla-an.a.run.app'
const baseUrl_2 = 'https://rontgen-service-pth7oyojla-an.a.run.app'

export const apiClient = {

//AUTH
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
            }).catch(()=>{
                result = { sent : false }
            })
        return result
    },

//MACHINE
    //get machine list
    async getMachineList() {
        let token = sessionStorage.getItem('Auth Token')
        return new Promise(function (resolve, reject) {
            axios
            .get(baseUrl_2 + '/machine/v1/machine', {
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
    },

    //create new machine
    async createNewMachine(data) {
        let token = sessionStorage.getItem('Auth Token')
        return new Promise(function (resolve, reject) {
            axios
              .post(baseUrl_2 + '/machine/v1/machine', data , {
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
    },
    
    // get mahcine detail by id
    async getMcDetailById(id) {
        let token = sessionStorage.getItem('Auth Token')
        return new Promise(function (resolve, reject) {
            axios
              .get(baseUrl_2 + '/machine/v1/machine/' + id, {
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
    },

    //update machine by id
    async upDateSvOrderCode(id, data) {
        let token = sessionStorage.getItem('Auth Token')
        return new Promise(function (resolve, reject) {
            axios
              .put(baseUrl_2 + '/machine/v1/machine/' + id, data, {
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
    },

    //get machine location by id
    async getMcLocationById(id) {
        let token = sessionStorage.getItem('Auth Token')
        return new Promise(function (resolve, reject) {
            axios
              .get(baseUrl_2 + '/machine/v1/machine/' + id + "/location", {
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
    },

    //get machine health by id
    async getMcHealthById(id) {
        let token = sessionStorage.getItem('Auth Token')
        return new Promise(function (resolve, reject) {
            axios
              .get(baseUrl_2 + '/machine/v1/machine/' + id + "/healthCode", {
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
    },

    //get machine images by id
    async getGetMcImageById(id) {
        let token = sessionStorage.getItem('Auth Token')
        return new Promise(function (resolve, reject) {
            axios
              .get(baseUrl_2 + '/machine/v1/machine/' + id + "/image", {
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
    },

//GROUP
    // get group list
    async getGroupList() {
        let token = sessionStorage.getItem('Auth Token')
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
    },

    // get group detail by id
    async getGrpDetailById(id) {
        let token = sessionStorage.getItem('Auth Token')
        return new Promise(function (resolve, reject) {
            axios
                .get(baseUrl_1 + '/v1/group/'+id, {
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
    },
}