import React from 'react';
import PlayerCard from '../PlayerCard';

const CardGallery = () => {
    const username = 'Riley';
    const bio = 'Riley really likes coldstone cake batter ice cream.';
    const game = 'League of Legends';
    const rank = 'Gold';
    const role = 'ADC';
    return (
        <PlayerCard
            username={username}
            bio={bio}
            game={game}
            rank={rank}
            role={role}
        />
    );
};

export default CardGallery;
