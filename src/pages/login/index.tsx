import './style.css'

import Valorant from "../../assets/valorant.svg";

export const LoginPage = () => {
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

                <input type="email" placeholder="Enter your email"/>

                <input type="password" placeholder="Enter your password"/>

                <button type="submit">sign in</button>

                <span>Don't have an account? <a href="#">Sign up</a></span>
                </form>
            </main>
        </div>
    )
}
