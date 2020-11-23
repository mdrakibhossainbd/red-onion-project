import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AppMainLayOut from './components/AppMainLayOut/AppMainLayOut';
import { initializeFirebaseLogin } from './components/Authentication/AuthManager';
import Login from './components/Login/Login';
import ShowCartList from './components/ShowCartList/ShowCartList';
import * as firebase from "firebase/app";
import "firebase/auth";
import Logout from './components/Login/Logout';
import PaymentThroughCard from './components/PaymentHandle/PaymentThroughCard';


export const UserContext = createContext();
export const CartContext = createContext();

function App() {
    initializeFirebaseLogin()

    const [loggedInUser, setLoggedInUser] = useState({
        isLogIn: false,
        displayName: '',
        photo: '',
        email: ''
    }); //------- global logged in user

    const [allCartItems, setAllCartItems] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const userInfo = {
                    displayName: user.displayName,
                    email: user.email,
                    profilePhoto: user.photoURL
                }
                if (userInfo.email) {
                    setLoggedInUser(userInfo)
                }
            } else {
                // No user is signed in.
            }
        });
    }, [])

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <CartContext.Provider value={[allCartItems, setAllCartItems]}>
                <div className="">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/'><AppMainLayOut /></Route>
                            <Route path='/showCart'> <ShowCartList /> </Route>
                            <Route path='/payNow'> <PaymentThroughCard/> </Route>
                            <Route path='/admin'> <AdminPanel /> </Route>
                            <Route path='/login'> <Login /> </Route>
                            <Route path='/logout'> <Logout /> </Route>
                            <Route path='*'><h3>404 <br /> Page not found </h3></Route>
                        </Switch>
                    </BrowserRouter>

                </div>
            </CartContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
