import './style.css'
import { gamesByName } from '../../services/api/routes.ts';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { GamesInterface } from "../../services/api/interfaces"
import { Card } from '../../components/card/index.tsx';
import { IoMdSearch } from "react-icons/io"

export const GamesPage = () => {
    const [game, setGame] = useState('');
    const [gamesList, setGamesList] = useState<GamesInterface[]>([]);

    const handleGame = (e: React.ChangeEvent<HTMLInputElement>) => setGame(e.target.value);

    const handleSearch = (e: any) => {
        e.preventDefault();

        gamesByName(game)
            .then((res) => {
                setGamesList(res.data);
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
        <div className="games-main">
            <div className="games-search">
                <label htmlFor="searchGame">Search games by name</label>
                    
                <div className="search-row">
                    <input type="search" name="searchGame" id="searchGame" value={game} onChange={handleGame}/>

                    <button type="button" onClick={handleSearch}>
                        <IoMdSearch className="search-icon" size={28} />
                    </button>
                </div>
            </div>

            <div className="games-list">
                {gamesList.map((game) => <Card game={game} key={game.id}/>)}
            </div>
        </div>
    )
}
