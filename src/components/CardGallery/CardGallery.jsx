import React from 'react';
import PlayerCard from '../PlayerCard';
import MockPlayers from './mockplayers.json';

const CardGallery = () => {
    return MockPlayers.map((player, i) => {
        return (
            <PlayerCard
                key={i}
                username={player.username}
                bio={player.bio}
                game={player.game}
                rank={player.rank}
                role={player.role}
            />
        );
    });
};

export default CardGallery;
