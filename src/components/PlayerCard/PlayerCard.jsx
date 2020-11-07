import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import "./PlayerCard.scss";

const PlayerCard = (props) => {
    return (
        <article className="card-parent">
            <Card
                bg="primary"
                text="info"
                style={{
                    width: "18rem"
                }}
            >
                <Card.Img className="card-image" src={`${props.pic}`} />
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title
                            style={{
                                fontFamily: "'Saira Stencil One', sans-serif"
                            }}
                        >{`${props.username}`}</Card.Title>
                        <Card.Text>{`${props.bio}`}</Card.Text>
                        <Card.Text className="card-attribute">
                            <span>Game:</span>
                            <span className="card-attribute-value">
                                {props.game}
                            </span>
                        </Card.Text>
                        <Card.Text className="card-attribute">
                            <span>Rank:</span>
                            <span className="card-attribute-value">
                                {props.rank}
                            </span>
                        </Card.Text>
                        <Card.Text className="card-attribute">
                            <span>Role:</span>
                            <span className="card-attribute-value">
                                {props.role}
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </article>
    );
};

export default PlayerCard;
