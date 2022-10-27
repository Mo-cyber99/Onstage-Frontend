import React, { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
// import { useUserStore } from "../stores/user";
// import { registerUser } from "../api";
import { auth } from "../firebase-config";
import '../css/Register.css'



export const Register = () => {
    // const store = useUserStore();
    // const auth = getAuth();
    const navigate = useNavigate();
    
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    // eslint-disable-next-line
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line
    const [isError, setIsError] = useState(false);
    // const newUser = {
    //     username: registerUsername,
    //     email: registerEmail,
    // }
    const handleRegister = () => {
        setIsError(false);
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword).then(
            (user) => {
                setIsLoading(false);
                console.log(user);
                navigate('/')
            }
        ).catch((err) => {
            setIsError(true);
            setIsLoading(false);
            alert(err.message);
        });
    };

    // registerUser(newUser).then((user) => {
    //     store._id = user._id;
    //     store.username = user.username;
    //     store.email = user.email;
    //     store.location = user.location;
    //     store.avatar = user.avatar;
    //     store.bio = user.bio;
    //     store.DOB = user.DOB;
    // });

    return (
        <>
        <h1>Create an Account</h1>
        <div className="form-container">
            <h2>
                Name
                <input type="text" placeholder="Name" onChange={(e) => {
                    setRegisterUsername(e.target.value);
                }}/>
            </h2>
            <h2>
                Email
                <input type="email" placeholder="Email" onChange={(e) => {
                    setRegisterEmail(e.target.value);
                }} />
            </h2>
            <h2>
                Password
                <input type="password" placeholder="Password" onChange={(e) => {
                    setRegisterPassword(e.target.value);
                }} />
            </h2>
            <button className="button" onClick={handleRegister}>Register</button>
        </div>
        </>
    )
}