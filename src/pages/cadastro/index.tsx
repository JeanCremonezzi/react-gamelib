import { ChangeEvent, useState } from 'react';
import './style.css'
import { LandingNav } from '../../components/landingNav';
import { Link } from 'react-router-dom';

export const CadastroPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const handleUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const handleRepeatPassword = (e: ChangeEvent<HTMLInputElement>) => setPasswordRepeat(e.target.value);

    const handleSubmit = (e: any) => {
        console.log(username, email, password, passwordRepeat);
    }

    return (
        <div className="container">
            <LandingNav />

            <main className="register-main">
                <form className="register-form">
                    <p>register</p>

                    <input type="uusername" placeholder="Enter your username" value={username} onChange={handleUsername}/>

                    <input type="email" placeholder="Enter your email" value={email} onChange={handleEmail}/>

                    <input type="password" placeholder="Enter your password" value={password} onChange={handlePassword}/>

                    <input type="password" placeholder="Repeat your password" value={passwordRepeat} onChange={handleRepeatPassword}/>

                    <button type="submit" onClick={handleSubmit}>sign up</button>

                    <span>Already have an account? <Link to="/">Sign in</Link></span>
                </form>
            </main>
        </div>
    )
}
