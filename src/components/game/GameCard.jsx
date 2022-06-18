import React from 'react';
import './gamecard.css'
const GameCard = ({game}) => {
    const getCardStyle=(gameName)=>{

    }
    return (
        <div className='game-card-wrapper' >
            <div className='game-card-media'>
                <div style={{backgroundImage: `url("${game.background_image}")`,
                    backgroundSize:'cover', width:'100%', height:'200px', borderRadius:'12px',
                    backgroundRepeat:'no-repeat'}}>
                </div>
            </div>
            <div className='game-card-info'>
                <h2>{game?.name}</h2>
                <div>Rating: {game?.rating}</div>
                <div>Released: {game?.released}</div>
            </div>
        </div>
    );
};

export default GameCard;
