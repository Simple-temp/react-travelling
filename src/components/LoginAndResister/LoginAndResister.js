import React, { useContext } from 'react';
import "./LoginAndResister.css"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import fb from "../../img/icon/fb.png";
import google from "../../img/icon/google.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from '../../App';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { useLocation, useNavigate } from 'react-router-dom';

initializeApp( firebaseConfig )

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const LoginAndResister = () => {

    const classes = useStyles();

    const provider = new GoogleAuthProvider();

    const [loggedInUser,setloggedInUser] = useContext ( UserContext );

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const googleSignIn = () =>
    {

    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        const {displayName,email,photoURL} = result.user;
        const signInuser = {name:displayName , email:email , img:photoURL};
        setloggedInUser(signInuser);
        navigate(from, { replace: true });
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
    }

    return (
        <>
                <div className="main">
                    <div className="row justify-content-between">
                            <div className="col-lg-4">
                                <div className="logo">
                                    <a href="/">Travelling</a>
                                </div>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <ul className='usermenu'>
                                    <li>
                                        <a>news</a>
                                    </li>
                                    <li>
                                        <a>destination</a>
                                    </li>
                                    <li>
                                        <a>blog</a>
                                    </li>
                                    <li>
                                        <a>contact</a>
                                    </li>
                                    <li className='btn'>
                                        <a>login</a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mx-auto">
                            <div className="login-box">
                                <h3>Login</h3>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField id="standard-basic" label="Email" className="w-100" />
                                    <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" className="w-100" />
                                    <span><a href="" className='ml-5'>Forgot Password</a></span>
                                    <input type="submit" value="Login" className="btn w-100 d-block mt-5" />
                                </form>
                                <hr />
                                <p className='text-center'>Dont have an account?<span><a href="">Create an account</a></span></p>
                            </div>
                            <hr />
                            <div className="others">
                                <ul>
                                    <li><img src={fb} alt="" /> <small>Continue with Facebook</small></li>
                                    <li onClick={googleSignIn}><img src={google} alt="" /> <small>Continue with Google</small></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default LoginAndResister;