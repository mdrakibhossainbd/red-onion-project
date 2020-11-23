import React, { useContext } from 'react';
import logo from '../../../images/logo2.png';
import cartIcon from '../../../images/icon/Path 1.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css';


const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light ">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" height="50" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item text-dark">
                            <Link className="nav-link py-2" to="/showCart">
                            <i className="fa fa-cart-plus fa-2x" style={{color:'red'}}>&nbsp;</i>
                            </Link>
                        </li>
                        {
                            loggedInUser.displayName
                                ?
                                <>
                                    <li className="nav-item ">
                                        <Link className="nav-link py-3" to="#">{loggedInUser.displayName}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout">
                                            <button className="add-to-cart">
                                                Log Out
                                            </button>
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            <button className="add-to-cart">
                                                Log In
                                            </button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link py-3" to="/login">Admin</Link>
                                    </li>
                                </>
                        }


                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;