import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { googleSignIn, initializeFirebaseLogin, signInWithEmailAndPassword } from '../Authentication/AuthManager';

const Login = () => {
    initializeFirebaseLogin();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [newUser, setNewUser] = useState({
        email: '',
        password: ''
    })

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }

    const [res, setRes] = useState({})
    initializeFirebaseLogin();

    const handleResponse = (res, redirect) => {
        console.log(res);
        setRes(res);
        if (res.success) {
            setLoggedInUser(res)
            redirect && history.replace(from);
        }
    }

    const googleSignInClick = () => { //------------------- Google Sign In
        googleSignIn()
            .then(res => {
                res && handleResponse(res , true);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newUser)
        if (newUser.email && newUser.password) {
            signInWithEmailAndPassword(newUser.email, newUser.password)
                .then(res => {
                    handleResponse(res)
                })
        }
    }
    const setUserInfo = (e) => {
        console.log(e.target.value);
        const user = newUser;

        if (e.target.name === 'email') {
            user.email = e.target.value
        } else if (e.target.name === 'password') {
            user.password = e.target.value
        }
        setNewUser(user)
    }
    return (
        <div className="d-flex align-items-center justify-content-center mt-5">
            {/* <!-- Material form login --> */}
            <div className="card">

                <h5 className="card-header info-color white-text text-center py-3 mb-3">
                    <strong>Log In</strong>
                </h5>

                {/* <!--Card content--> */}
                <div className="card-body px-lg-5 pt-0">

                    {/* <form onSubmit={handleSubmit} className="text-center" style={{ color: "#757575" }} >

                        <div className="md-form">
                            <input name="email" onBlur={setUserInfo} type="email" id="materialLoginFormEmail" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="md-form">
                            <input name="password" onBlur={setUserInfo} type="password" id="materialLoginFormPassword" className="form-control" placeholder="Password" required />
                        </div>

                        <div className="d-flex justify-content-around">
                            <div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="materialLoginFormRemember" />
                                    <label className="form-check-label" for="materialLoginFormRemember">
                                        <small>Remember me</small>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <Link to=""><small>Forgot password?</small></Link>
                            </div>
                        </div>

                        {res.error && <small style={{ color: 'red' }}>{res.error}</small>}
                        {res.success && <small style={{ color: 'green' }}>Log in success</small>}

                        <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">
                            Log In
                        </button>
                    </form>
                    <p>Not a member?
                       <Link to="#"> Register </Link>
                    </p> */}

                    {/* <!-- Social login --> */}
                    {/* <p>or sign in with:</p> */}
                    {/* <Link to="#" type="button" className="btn-floating btn-fb btn-sm">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="#" type="button" className="btn-floating btn-tw btn-sm">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="#" type="button" className="btn-floating btn-li btn-sm">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link to="#" type="button" className="btn-floating btn-git btn-sm">
                            <i className="fab fa-github"></i>
                        </Link> */}
                    <Link to="#" onClick={googleSignInClick} type="button" className="btn-floating   btn-lg">
                    <i class="fab fa-google-plus-g"></i> <span>Login with Google</span>
                    </Link>


                    {/* <!-- Form --> */}

                </div>

            </div>
            {/* <!-- Material form login --></form> */}
        </div>
    );
};

export default Login;