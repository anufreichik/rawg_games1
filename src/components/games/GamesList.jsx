import React from 'react';
import GameCard from "../game/GameCard";
import './gameslist.css'
const GamesList = ({games}) => {
    console.log(games, 'games')
    return (
        <div className='games-container'>
            <div className='games-columns'>
                {games && games?.map((el,i)=><GameCard game={el} key={i}/>)}
            </div>
        </div>
    );
};

export default GamesList;
