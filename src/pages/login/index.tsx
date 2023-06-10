import './style.css'

import Valorant from "../../assets/valorant.svg";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { signin } from '../../services/api/routes.ts';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const showToast = (message: string) => {
        toast.error(message, {
            style: {
                borderRadius: '8px',
                background: 'var(--color-error)',
                color: '#fff',
                fontWeight: 'bolder',
                fontFamily: "'Josefin Sans', sans-serif"
            },
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        if (email === null || email === "" || password === null || password === "") {
            showToast('Please fill in all fields!');
            return
        }

        signin({email, password})
            .then(() => navigate("/games"))
            .catch((err) => showToast(err.response.data.message))
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value.trim());
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value.trim());

    return (
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
    )
}
