import { ChangeEvent, useState } from 'react';
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { signup } from '../../services/api/routes.ts';

export const CadastroPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigate = useNavigate();
    
    const handleUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value.trim());
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value.trim());
    const handleRepeatPassword = (e: ChangeEvent<HTMLInputElement>) => setPasswordRepeat(e.target.value.trim());

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

        if (password != passwordRepeat) {
            showToast("Passwords do not match");
            return            
        }

        if (username === null || username.trim() === "" || email === null || email === "" || password === null || password === "") {
            showToast("Please fill in all fields!");
            return
        }
        
        signup({username, email, password})
            .then((res) => navigate("/games"))
            .catch((err) => showToast(err.response.data.message))
    }

    return (
        <main className="register-main">
            <form className="register-form">
                <p>register</p>

                <input type="text" placeholder="Enter your username" value={username} onChange={handleUsername}/>

                <input type="email" placeholder="Enter your email" value={email} onChange={handleEmail}/>

                <input type="password" placeholder="Enter your password" value={password} onChange={handlePassword}/>

                <input type="password" placeholder="Repeat your password" value={passwordRepeat} onChange={handleRepeatPassword}/>

                <button type="submit" onClick={handleSubmit}>sign up</button>

                <span>Already have an account? <Link to="/">Sign in</Link></span>
            </form>
        </main>
    )
}
