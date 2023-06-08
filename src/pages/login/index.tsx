import './style.css'

import Valorant from "../../assets/valorant.svg";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingNav } from '../../components/landingNav';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        if (email === null || email === "" || password === null || password === "") {
            alert("Fill all fields");
            return
        }

        console.log(email, password);
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value.trim());
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value.trim());

    return (
        <div className="container">
            <LandingNav />

            <main className="landing-main">
                <img src={Valorant}/>

                <form className="login-form">
                    <p>login</p>

                    <input type="email" placeholder="Enter your email" value={email} onChange={handleEmail}/>

                    <input type="password" placeholder="Enter your password" value={password} onChange={handlePassword}/>

                    <button type="submit" onClick={handleSubmit}>sign in</button>

                    <span>Don't have an account? <Link to="/register">Sign up</Link></span>
                </form>
            </main>
        </div>
    )
}
