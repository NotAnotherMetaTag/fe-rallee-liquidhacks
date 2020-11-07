import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Home.scss";

import ContentPage from "../ContentPage";
import CardGallery from "../CardGallery";

function Home() {
    return (
        <ContentPage>
            <Container fluid>
                <Row className="home-content">
                    <Col className="home-cards-wrapper">
                        <CardGallery />
                    </Col>
                    <Col
                        className="home-controls-wrapper"
                        md="2"
                        style={{
                            border: "2px solid red"
                        }}
                    >
                        <div>FilterBar</div>
                    </Col>
                </Row>
            </Container>
        </ContentPage>
    );
}

export default Home;
