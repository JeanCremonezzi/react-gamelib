import { GamesInterface } from "../../services/api/interfaces";
import './style.css';

interface CardProps {
    game: GamesInterface
}

export const Card = (props: CardProps) => {
    return (
        <div key={props.game.id} className="card shadow">
            {props.game.cover ? <img src={props.game.cover} alt={`Cover art from ${props.game.name}`}/> : ''}

            <span className="filter"></span>

            <div className="game-info">
                <span className="game-name">{props.game.name}</span>
                <small className="game-release">{props.game.initial_release}</small>
            </div>
        </div>
    )
}
