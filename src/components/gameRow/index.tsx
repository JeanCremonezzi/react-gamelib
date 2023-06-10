import { useState } from "react";
import { AddGameInterface } from "../../services/api/interfaces.ts";
import { SlOptions } from "react-icons/sl"
import { MdDeleteForever, MdRefresh } from "react-icons/md"
import { RxUpdate } from "react-icons/rx"

import "./style.css"

export interface GameRowProps {
    game: AddGameInterface
}

export const GameRow = (props: GameRowProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [position, setPosition] = useState<number[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setPosition([e.pageX, e.pageY])
        setIsMenuOpen((prevState) => !prevState);
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
                        <button className="context-delete-btn"><MdDeleteForever size={24} fill="var(--color-error)"/></button>
                    </div> 
                : null}
            </td>
        </tr>
    )
}
