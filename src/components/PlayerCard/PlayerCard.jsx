import React from "react";
import { Card, Image } from "react-bootstrap";
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
                <Card.ImgOverlay style={{ padding: "0.3rem" }}>
                    <Card.Body>
                        <Card.Title
                            style={{
                                fontSize: "1.8rem",
                                fontFamily: "'Saira Stencil One', sans-serif"
                            }}
                        >
                            {`${props.username}`}{" "}
                            <Image
                                className="game-logo"
                                src={`${props.gamelogo}`}
                            />{" "}
                        </Card.Title>
                        <Card.Text>{`${props.bio}`}</Card.Text>
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
                        <Image
                            className="rank-medal"
                            src={`${props.rankmedal}`}
                        />{" "}
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </article>
    );
};

export default PlayerCard;
