import { useState } from "react";
import { AddGameInterface } from "../../services/api/interfaces.ts";
import { SlOptions } from "react-icons/sl"
import { MdDeleteForever, MdRefresh } from "react-icons/md"
import { deleteGame } from '../../services/api/routes.ts';
import toast from 'react-hot-toast';

import "./style.css"

export interface GameRowProps {
    game: AddGameInterface,
    removeFromCollection: (id: string) => void
}

export const GameRow = (props: GameRowProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [position, setPosition] = useState<number[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setPosition([e.pageX, e.pageY])
        setIsMenuOpen((prevState) => !prevState);
    }

    const handleDelete = () => {
        deleteGame(props.game.gameId)
            .then((res) => {
                toast.success(res.data.message, {
                    style: {
                        borderRadius: '8px',
                        background: 'var(--color-success)',
                        color: '#2B2B2B',
                        fontWeight: 'bolder',
                        fontFamily: "'Josefin Sans', sans-serif"
                    },
                });
                props.removeFromCollection(props.game.gameId);
            })
            .catch((err) => {
                toast.error(err.response.data.message, {
                    style: {
                        borderRadius: '8px',
                        background: 'var(--color-error)',
                        color: '#fff',
                        fontWeight: 'bolder',
                        fontFamily: "'Josefin Sans', sans-serif"
                    },
                });
            })
    }

    return (
        <tr onMouseLeave={() => setIsMenuOpen(false)}>
            <td>{props.game.gameName}</td>
            <td>{props.game.platform}</td>
            <td>{props.game.yearPlayed}</td>
            <td><span>{props.game.hoursPlayed}</span> hrs</td>
            <td>
                <SlOptions className="btn-options" onClick={handleClick}/>

                {isMenuOpen ? 
                    <div className="context-menu shadow" style={{
                        left: position[0],
                        top: position[1],
                        transform: "translate(-20px, 0)",
                    }}>
                        <button className="context-update-btn"><MdRefresh size={24} fill="var(--color-info)"/></button>
                        <span className="separator"></span>
                        <button className="context-delete-btn" onClick={handleDelete}><MdDeleteForever size={24} fill="var(--color-error)"/></button>
                    </div> 
                : null}
            </td>
        </tr>
    )
}
