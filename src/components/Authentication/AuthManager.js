import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeFirebaseLogin = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const createUserWithEmailAndPassword = (name, email, password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(res =>{
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserInfo(name);
            return newUserInfo;
        })
        .catch(function (error) {
            console.log("user not created in database")
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

const updateUserInfo=(info)=>{
    let user = firebase.auth().currentUser;
    user.updateProfile({
        displayName:info,
    })
    .then(()=>{
        console.log("User Info updated")
    })
    .catch(err=>console.log(err))
}

export const signInWithEmailAndPassword = (email, password)=>{
    return firebase.auth().signInWithEmailAndPassword(email,password)
            .then(res=>{
                const newUserInfo = res.user;
                newUserInfo.error = '';
                newUserInfo.success = true;
                return newUserInfo;
            })
            .catch(error=>{
                const newUserInfo = {};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                return newUserInfo
            })
}

export const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
                .then(result => {
                    var token = result.credential.accessToken;
                    const { displayName, email, photoURL } = result.user;
                    const userData = {
                        isLogIn: true,
                        displayName: displayName,
                        email: email,
                        photo: photoURL,
                        success: true
                    }
                    return userData;
                })
                .catch(error =>{
                    console.log(error.message) 
                });
}

export const googleSignOut = () => {
    localStorage.setItem('user', JSON.stringify({email:'',displayName:''}))
    return firebase.auth().signOut()
        .then(result => {
            const user = {
                isLogIn: false,
                displayName: '',
                photo: '',
                email: ''
            }
            return user;
        }).catch(err => {
            console.log(err.message)
        });
}