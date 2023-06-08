import { Link } from "react-router-dom"
import './style.css'

export const LandingNav = () => {
    return (
        <nav className="landing-nav shadow">
            <Link to="/">games</Link>
            <Link to="/register">sign up</Link>
            <Link to="/">about</Link>
        </nav>
    )
}
