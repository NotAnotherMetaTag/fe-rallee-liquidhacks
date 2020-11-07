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
                        <Card.Text className="bio">{`${props.bio}`}</Card.Text>
                        <div>
                            {`${props.role}`}
                            <Image
                                className="rank-medal"
                                src={`${props.rankmedal}`}
                            />{" "}
                        </div>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </article>
    );
};

export default PlayerCard;
