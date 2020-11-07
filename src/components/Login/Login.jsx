import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img
                        src={process.env.PUBLIC_URL + "/Logo/White_Rainbow.svg"}
                        alt="Rallee Logo"
                        style={{
                            display: "block",
                            margin: "0 auto",
                            maxWidth: "650px",
                            width: "100%"
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
