import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import async from 'async'

const config = {
    apiKey: "AIzaSyA2RXVe0LOBQ8Nr81_7ssWKAIMviXXFJ5U",
    authDomain: "crwn-clothing-be804.firebaseapp.com",
    databaseURL: "https://crwn-clothing-be804.firebaseio.com",
    projectId: "crwn-clothing-be804",
    storageBucket: "crwn-clothing-be804.appspot.com",
    messagingSenderId: "790911003406",
    appId: "1:790911003406:web:0a4c1955e10754926e055f",
    measurementId: "G-T16TC3LPMR"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try{
           await userRef.set({
               displayName,
               createdAt,
               email,
               ...additionalData
           }) 
        } catch (error){
            console.log('error creating user', error.message)
       }
    }
    return userRef
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase