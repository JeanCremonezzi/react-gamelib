import { SlOptions } from "react-icons/sl"
import { getCollection } from '../../services/api/routes.ts';

import "./style.css"
import { useEffect, useState } from "react"
import { AddGameInterface } from "../../services/api/interfaces.ts";

export const CollectionPage = () => {
    const [collection, setCollection] = useState<AddGameInterface[]>([]);

    useEffect(() => {
        getCollection()
        .then((res) => {
            setCollection(res.data);
        })
    }, [])
    

    return (
        <div className="collection-main">
            <h1 className="collection-title">Your collection</h1>

            <div className="table-container">
                <table className="collection-table">
                    <thead>
                        <tr>
                            <th>game</th>
                            <th>platform</th>
                            <th>year played</th>
                            <th>time played</th>
                            <th>options</th>
                        </tr>
                    </thead>

                    <tbody>
                        {collection.map((game) => {
                            return (
                                <tr key={game.gameId}>
                                    <td>{game.gameName}</td>
                                    <td>{game.platform}</td>
                                    <td>{game.yearPlayed}</td>
                                    <td><span>{game.hoursPlayed}</span> hrs</td>
                                    <td><SlOptions className="btn-options"/></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
