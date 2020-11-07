import React, { useState } from "react";
import { Card, Image, Button, Modal, Carousel } from "react-bootstrap";
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
                onClick={handleShow}
            >
                <EdgedCard>
                    <Card.Img className="card-image" src={`${props.pic}`} />
                    <Card.ImgOverlay style={{ padding: "0.3rem" }}>
                        <Card.Body>
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
                            <div>
                                {`${props.role}`}
                                <Image
                                    className="rank-medal"
                                    src={`${props.rankmedal}`}
                                />{" "}
                            </div>
                        </Card.Body>
                    </Card.ImgOverlay>
                </EdgedCard>
            </Button>
            <Modal centered show={show} onHide={handleClose}>
                <Card.Img className="modal-image" src={`${props.pic}`} />
                <Card.ImgOverlay style={{ padding: "0.3rem" }}>
                    <Modal.Body>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div
                            style={{
                                fontSize: "3rem",
                                fontFamily: "'Saira Stencil One', sans-serif",
                                textAlign: "left"
                            }}
                        >
                            {`${props.username}`}{" "}
                        </div>
                        <div>
                            <Button variant="primary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Message
                            </Button>
                        </div>
                    </Modal.Body>
                </Card.ImgOverlay>
            </Modal>
        </>
    );
};

export default PlayerCard;
