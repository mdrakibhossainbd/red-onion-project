import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { googleSignOut } from '../Authentication/AuthManager';

const Logout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); //------- global logged in user
    const history = useHistory()

    useEffect(()=>{
        googleSignOut()
        .then(res=>{
            setLoggedInUser(res);
            history.push('/')
        })
    },[])
    
    return (
        <div>
            
        </div>
    );
};

export default Logout;