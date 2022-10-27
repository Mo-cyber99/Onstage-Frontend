import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { useUserStore } from "../stores/user";
// import { getUser } from "../api";
import { auth } from "../firebase-config";
import '../css/SignIn.css'



export const SignIn = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    // eslint-disable-next-line
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();

    // const store = useUserStore();
    // const auth = getAuth();
    
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((firebaseUser) => {
            setCurrentUser(firebaseUser)
            // getUser(firebaseUser.user.email).then((user) => {
            //     store._id = user._id;
            //     store.username = user.username;
            //     store.email = user.email;
            //     store.DOB = user.DOB;
            //     store.location = user.location;
            //     store.avatar = user.avatar;
            //     store.bio = user.bio;
            // });
            navigate('/')
        })
        .catch((err) => {
            alert (err.code)
        });
    };

    return (
        <div className="form-container">
            <h1>Sign In</h1>
            <h2>
                Email
                <input type="email" placeholder="Email" onChange={(e) => {
                    setLoginEmail(e.target.value)
                }} />
            </h2>
            <h2>
                Password
                <input type="password" placeholder="Password" onChange={(e) => {
                    setLoginPassword(e.target.value)
                }} />
            </h2>
            <button className="button" onClick={handleLogin}>Login</button>
            <p>Don't have an account yet?</p>
            <Link to='/sign-up'><button className="button">Register here</button></Link>
        </div>
    )
}