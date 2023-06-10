import { getCollection } from '../../services/api/routes.ts';

import "./style.css"
import { useEffect, useState } from "react"
import { AddGameInterface } from "../../services/api/interfaces.ts";
import { GameRow } from "../../components/gameRow/index.tsx";
import { useCookies } from "react-cookie";

export const CollectionPage = () => {
    const [collection, setCollection] = useState<AddGameInterface[]>([]);
    const [cookies, setCookie] = useCookies(['signin_token']);

    useEffect(() => {
        if (cookies.signin_token){
            getCollection()
            .then((res) => {
                setCollection(res.data);
            })
        }
    }, [])
    
    const handleRemoveFromCollection = (id: string) => setCollection((prevState) => prevState.filter((item) => item.gameId !== id))

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
                            <th>hours played</th>
                            <th>options</th>
                        </tr>
                    </thead>

                    <tbody>
                        {collection.map((game) => <GameRow game={game} key={game.gameId} removeFromCollection={handleRemoveFromCollection}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
