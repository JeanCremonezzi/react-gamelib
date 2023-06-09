import { Link } from "react-router-dom"
import './style.css'

export const LandingNav = () => {
    return (
        <nav className="landing-nav shadow">
            <Link to="/games">games</Link>
            <Link to="/">collection</Link>
            <Link to="/">about</Link>
        </nav>
    )
}
