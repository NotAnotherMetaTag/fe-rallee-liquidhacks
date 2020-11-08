import React, { useState } from "react";
import { Card, Image, Button, Modal } from "react-bootstrap";
import "./PlayerCard.scss";
import EdgedCard from "../EdgedCard";

const PlayerCard = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button
                variant="link"
                style={{
                    outline: "none",
                    boxShadow: "none"
                }}
                className="card-selector"
                onClick={handleShow}
            >
                <EdgedCard width="18rem" growOnHover="true">
                    <Card.Img className="card-image" src={`${props.pic}`} />
                    <Card.ImgOverlay>
                        <Card.Body>
                            <div>
                                <Card.Title
                                    style={{
                                        fontSize: "1.8rem",
                                        fontFamily:
                                            "'Saira Stencil One', sans-serif",
                                        textAlign: "left"
                                    }}
                                >
                                    {`${props.username}`}{" "}
                                    <Image
                                        className="game-logo"
                                        src={`${props.gamelogo}`}
                                    />{" "}
                                </Card.Title>
                                <Card.Text className="bio">{`${props.bio}`}</Card.Text>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexFlow: "row nowrap",
                                    justifyContent: "space-between"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexFlow: "column nowrap",
                                        justifyContent: "flex-end",
                                        alignItems: "flex-start",
                                        fontSize: "0.9rem"
                                    }}
                                >
                                    {props.roles &&
                                        props.roles.map((role, i) => {
                                            return <div key={i}>{role}</div>;
                                        })}
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexFlow: "column nowrap",
                                        justifyContent: "flex-end"
                                    }}
                                >
                                    {`${props.rank}`}
                                    <Image
                                        className="rank-medal"
                                        src={`${props.rankmedal}`}
                                        width="75px"
                                    />{" "}
                                </div>
                            </div>
                        </Card.Body>
                    </Card.ImgOverlay>
                </EdgedCard>
            </Button>
            <Modal centered show={show} onHide={handleClose}>
                <Card.Img className="modal-image" src={`${props.pic}`} />
                <Card.ImgOverlay style={{ padding: "0.3rem" }}>
                    <Modal.Body>
                        <div>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div
                                style={{
                                    fontSize: "3rem",
                                    fontFamily:
                                        "'Saira Stencil One', sans-serif",
                                    textAlign: "left"
                                }}
                            >
                                {`${props.username}`}{" "}
                            </div>
                            <div
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "1.2rem"
                                }}
                            >{`${props.name}`}</div>
                            <div>{`${props.bio}`}</div>
                        </div>
                        <div>
                            <Button
                                className="button-font"
                                variant="warning"
                                size="lg"
                                block
                                onClick={handleClose}
                            >
                                Message Player
                            </Button>
                        </div>
                    </Modal.Body>
                </Card.ImgOverlay>
            </Modal>
        </>
    );
};

export default PlayerCard;
