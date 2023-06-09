import { useCookies } from "react-cookie";
import { GamesInterface } from "../../services/api/interfaces";
import './style.css';
import { BsFillBookmarkPlusFill } from "react-icons/bs"
import toast from 'react-hot-toast';


interface CardProps {
    game: GamesInterface
}

export const Card = (props: CardProps) => {
    const [cookies, setCookie] = useCookies(['signin_token']);

    const handleClick = () => {
        if (!cookies.signin_token) {
            toast.error("You must be logged to add a game to your collection", {
                style: {
                    borderRadius: '8px',
                    background: 'var(--color-error)',
                    color: '#fff',
                    fontWeight: 'bolder',
                    fontFamily: "'Josefin Sans', sans-serif"
                },
            });

            return
        }
    }

    return (
        <div key={props.game.id} className="card shadow" onClick={handleClick}>
            <div className="game-add">
                <BsFillBookmarkPlusFill className="btn-add" size={64} />
            </div>

            {props.game.cover ? <img src={props.game.cover} alt={`Cover art from ${props.game.name}`}/> : ''}

            <span className="filter"></span>

            <div className="game-info">
                <span className="game-name">{props.game.name}</span>
                <small className="game-release">{props.game.initial_release}</small>
            </div>
        </div>
    )
}
