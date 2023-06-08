import './style.css'

import Valorant from "../../assets/valorant.svg";
import React, { useState } from 'react';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        console.log(email, password);
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <div className="container">
            <nav className="landing-nav shadow">
                <a href="#">games</a>
                <a href="#">sign up</a>
                <a href="#">about</a>
            </nav>

            <main className="landing-main">
                <img src={Valorant}/>

                <form className="login-form">
                    <p>login</p>

                    <input type="email" placeholder="Enter your email" value={email} onChange={handleEmail}/>

                    <input type="password" placeholder="Enter your password" value={password} onChange={handlePassword}/>

                    <button type="submit" onClick={handleSubmit}>sign in</button>

                    <span>Don't have an account? <a href="#">Sign up</a></span>
                </form>
            </main>
        </div>
    )
}
