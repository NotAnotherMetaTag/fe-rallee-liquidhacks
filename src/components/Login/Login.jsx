import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";

import AdditionalLoginOptions from "./AdditionalLoginOptions";
import FormDivider from "../FormDivider";

import blueTransparent from "../../assets/blue_transparent.png";

function Login() {
    const history = useHistory();

    const initialValues = {
        email: "",
        password: ""
    };

    const onSubmit = () => {
        // TODO: Connect to backend
        history.push("/");
    };

    const validationSchema = yup.object({
        email: yup.string().email("Invalid email").required("Required"),
        password: yup
            .string()
            .required("Please Enter your password")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
    });

    return (
        <Container fluid>
            <Row>
                <Col>
                    <img
                        src={process.env.PUBLIC_URL + "/Logo/White_Rainbow.svg"}
                        alt="Rallee Logo"
                        style={{
                            display: "block",
                            margin: "1rem auto",
                            maxWidth: "650px",
                            width: "100%"
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={4} style={{ margin: "0 auto" }}>
                    <Formik {...{ initialValues, validationSchema, onSubmit }}>
                        {({
                            handleSubmit,
                            handleChange,
                            getFieldProps,
                            values,
                            touched,
                            errors
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="formLoginEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="blue@teamliquid.com"
                                        {...getFieldProps("email")}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone
                                        else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formLoginPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="hunter2"
                                        {...getFieldProps("password")}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    style={{
                                        display: "block",
                                        margin: "0 auto"
                                    }}
                                >
                                    Login
                                </Button>
                            </Form>
                        )}
                    </Formik>

                    <FormDivider />

                    <AdditionalLoginOptions />
                </Col>
            </Row>

            <img
                src={blueTransparent}
                alt=""
                style={{
                    position: "fixed",
                    right: "0",
                    zIndex: "-1",
                    width: "25%",
                    bottom: "0",
                    margin: "1rem"
                }}
            />
        </Container>
    );
}

export default Login;
