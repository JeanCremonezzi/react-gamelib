import { useEffect, useState } from "react";
import { AddGameInterface } from "../../services/api/interfaces.ts";
import { SlOptions } from "react-icons/sl"
import { MdDeleteForever, MdRefresh } from "react-icons/md"
import { deleteGame, editGame } from '../../services/api/routes.ts';
import toast from 'react-hot-toast';

import "./style.css"

export interface GameRowProps {
    game: AddGameInterface,
    removeFromCollection: (id: string) => void
}

export const GameRow = (props: GameRowProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [position, setPosition] = useState<number[]>([]);
    const [platform, setPlatform] = useState('');
    const [year, setYear] = useState('');
    const [hours, setHours] = useState('');

    useEffect(() => {
        setPlatform(props.game.platform);
        setYear(props.game.yearPlayed.toString());
        setHours(props.game.hoursPlayed ? props.game.hoursPlayed.toString() : '0');
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setPosition([e.pageX, e.pageY])
        setIsMenuOpen((prevState) => !prevState);
    }

    const showOkToast = (message: string) => {
        toast.success(message, {
            style: {
                borderRadius: '8px',
                background: 'var(--color-success)',
                color: '#2B2B2B',
                fontWeight: 'bolder',
                fontFamily: "'Josefin Sans', sans-serif"
            },
        });
    }

    const showErrorToast = (message: string) => {
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

    const handleDelete = () => {
        deleteGame(props.game.gameId)
            .then((res) => {
                showOkToast(res.data.message);
                props.removeFromCollection(props.game.gameId);
            })
            .catch((err) => showErrorToast(err.response.data.message))
    }

    const handleEdit = () => {
        const data = {
            gameId: props.game.gameId,
            platform: platform,
            yearPlayed: year,
            hoursPlayed: hours
        }

        editGame(data)
            .then((res) => showOkToast(res.data.message))
            .catch((err) => showErrorToast(err.response.data.message))
            
    }

    const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => setYear(e.target.value)
    const handleHours = (e: React.ChangeEvent<HTMLInputElement>) => setHours(e.target.value)

    return (
        <tr onMouseLeave={() => setIsMenuOpen(false)}>
            <td>{props.game.gameName}</td>
            <td>{props.game.platform}</td>
            <td><input className="cell-input" value={year} onChange={handleYear}/></td>
            <td><input className="cell-input" value={hours} onChange={handleHours}/></td>
            <td>
                <SlOptions className="btn-options" onClick={handleClick}/>

                {isMenuOpen ? 
                    <div className="context-menu shadow" style={{
                        left: position[0],
                        top: position[1],
                        transform: "translate(-20px, 0)",
                    }}>
                        <button className="context-update-btn" onClick={handleEdit}><MdRefresh size={24} fill="var(--color-info)"/></button>
                        <span className="separator"></span>
                        <button className="context-delete-btn" onClick={handleDelete}><MdDeleteForever size={24} fill="var(--color-error)"/></button>
                    </div> 
                : null}
            </td>
        </tr>
    )
}
