import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Home.scss";

import ContentPage from "../ContentPage";
import CardGallery from "../CardGallery";
import FilterBar from "../FilterBar";

function Home() {
    return (
        <ContentPage>
            <Container fluid>
                <Row className="home-content">
                    <Col className="home-cards-wrapper">
                        <CardGallery />
                    </Col>
                    <Col className="home-controls-wrapper" xl="3">
                        <FilterBar />
                    </Col>
                </Row>
            </Container>
        </ContentPage>
    );
}

export default Home;
