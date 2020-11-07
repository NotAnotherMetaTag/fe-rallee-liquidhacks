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
                        pic={player.pic}
                        username={player.username}
                        bio={player.bio}
                        game={player.game}
                        rank={player.rank}
                        role={player.role}
                    />
                );
            })}
        </div>
    );
};

export default CardGallery;
