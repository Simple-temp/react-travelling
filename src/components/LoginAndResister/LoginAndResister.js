import React, { useContext, useState } from 'react';
import "./LoginAndResister.css"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import fb from "../../img/icon/fb.png";
import google from "../../img/icon/google.png";
import { getAuth, signInWithPopup , GoogleAuthProvider , createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile ,FacebookAuthProvider } from "firebase/auth";
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
    const fbprovider = new FacebookAuthProvider();

    const [loggedInUser,setloggedInUser] = useContext ( UserContext );

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const facebookSignIn = () =>
    {
        const auth = getAuth();
    signInWithPopup(auth, fbprovider)
    .then((result) => {
        const info = result.user;
        console.log("fb user",info);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
    });
    }


    const googleSignIn = () =>
    {

        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            const {displayName,email,photoURL} = result.user;
            const signInuser = {email:email , img:photoURL};
            setloggedInUser(signInuser);
            navigate(from, { replace: true });
            console.log(signInuser)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    const [newperson,setNewperson] = useState(true);

    const [user,setUser] = useState({
        isSignIn : false,
        name : "",
        email : "",
        password : "",
        photo : "",
        success : "",
        error : "",
    });


    const haldleBlur = (e) =>
    {
        let isvalid = true;
        if( e.target.name === "email")
        {
          isvalid = /\S+@\S+.\S+/.test(e.target.value);
        }
        if( e.target.name === "password")
        {
          const passLength = e.target.value.length > 8 ;
          const validPass = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])(?=.*?[0-9])/.test(e.target.value);
          isvalid = passLength && validPass;
        }
        if(isvalid)
        {
          const newUserInfo = {...user}
          newUserInfo [e.target.name] = e.target.value;
          setUser(newUserInfo);
        }
    }

    const haldleSubmit = (e) =>
    {
        if(newperson && user.email && user.password)
        {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((res) => {
                const newUserInfo = {...user}
                setUser(newUserInfo);
                setloggedInUser(newUserInfo);
                update(user.name)
                navigate(from, { replace: true });
              })
              .catch(error => {
                const newUserInfo = {...user}
                newUserInfo.error = error.message;
                setUser(newUserInfo)
              });
        }
        if(user.email && user.password)
        {
            const auth = getAuth();
                signInWithEmailAndPassword(auth, user.email , user.password)
                .then((res) => {
                    const newUserInfo = {...user}
                    setUser(newUserInfo);
                    setloggedInUser(newUserInfo);
                    navigate(from, { replace: true });
                })
                .catch((error) => {
                    const newUserInfo = {...user}
                    setUser(newUserInfo)
                });
        }
        e.preventDefault();
    }


    const update = name =>
    {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
        displayName: name
        }).then(() => {
            console.log("User name update successfully");
        }).catch((error) => {
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
                                <ul className='usermenu login-menu'>
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
                                <h3 className='text-center'>{ newperson ? "Create an account" : "Login"}</h3>
                                <form className={classes.root} noValidate autoComplete="off" onSubmit={haldleSubmit}>
                                    {
                                        newperson && <TextField id="standard-basic" name="name" label="Name" className="w-100" onBlur={haldleBlur} required />
                                    }
                                    <TextField id="standard-basic" name="email" label="Email" className="w-100" onBlur={haldleBlur} required />
                                    {
                                        newperson && <small style={{color:"red"}}>{user.error && "Email already taken"}</small>
                                    }
                                    <TextField id="standard-password-input" name="password" label="Password minimum 8 charecters" type="password" autoComplete="current-password" className="w-100" onBlur={haldleBlur}  required />
                                    {
                                        !newperson && <p style={{color:"rgb(255, 174, 0)",cursor:"pointer"}}>Forgot password?</p>
                                    }
                                    <input type="submit" value={ newperson ? "Create an account" : "Login"} className='btn w-100 d-block mt-5' />
                                </form>
                                <hr />
                                <p className='text-center'>
                                    {
                                        !newperson ? "Don't have an account?" : "Already have an acoount?"
                                    }
                                <button className='tooglebtn' onClick={()=>setNewperson(!newperson)} >
                                    {
                                        newperson ? "Login" : "Create an account"
                                    }
                                </button>
                                </p>
                            </div>
                            <hr />
                            <div className="others">
                                <ul>
                                    <li onClick={facebookSignIn}><img src={fb} alt="" /> <small>Continue with Facebook</small></li>
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

