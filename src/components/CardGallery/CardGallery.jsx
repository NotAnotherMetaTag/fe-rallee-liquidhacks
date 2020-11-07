import React from "react";
import PlayerCard from "../PlayerCard";
import MockPlayers from "./mockplayers.json";
import "./CardGallery.scss";
import { Card } from "react-bootstrap";

const CardGallery = () => {
    return (
        <div className="card-gallery">
            {" "}
            {MockPlayers.map((player, i) => {
                return (
                    <PlayerCard
                        key={i}
                        gamelogo={player.gamelogo}
                        pic={player.pic}
                        username={player.username}
                        bio={player.bio}
                        rank={player.rank}
                        role={player.role}
                        rankmedal={player.rankmedal}
                    />
                );
            })}
        </div>
    );
};

export default CardGallery;
