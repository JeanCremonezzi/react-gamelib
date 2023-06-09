import { Link } from "react-router-dom"
import './style.css'
import { useCookies } from "react-cookie";

export const LandingNav = () => {
    const [cookies, setCookie] = useCookies(['signin_token']);

    return (
        <nav className="landing-nav shadow">
            <Link to="/games">games</Link>
            <Link to="/">collection</Link>
            
            { cookies.signin_token ? <Link to="/">profile</Link> : <Link to="/">sign in</Link> }

        </nav>
    )
}
