import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import FormDivider from "../../../FormDivider";

function GameProfiles() {
    const initialValues = {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        bio: ""
    };

    const onSubmit = () => {
        // TODO: Post to backend
        alert("User updated!");
    };

    const validationSchema = yup.object({
        username: yup
            .string()
            .min(1, "Please enter your username")
            .required("Please enter your username"),
        role: yup
            .string()
            .min(1, "Please enter your first name")
            .required("Please enter your first name"),
        rank: yup
            .string()
            .min(1, "Please enter your last name")
            .required("Please enter your last name")
    });

    return (
        <>
            <Form.Label>Select Game:</Form.Label>
            <Form.Control as="select" custom>
                <option>League of Legends</option>
                <option>Dota 2</option>
                <option>VALORANT</option>
            </Form.Control>

            <FormDivider />

            <Formik {...{ initialValues, validationSchema, onSubmit }}>
                {({ handleSubmit, getFieldProps, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="formLoginEmail">
                            <Form.Label>In-Game Username</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder=""
                                {...getFieldProps("username")}
                                isInvalid={!!errors.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formLoginEmail">
                            <Form.Label>Role</Form.Label>
                            <Form.Control as="select" custom>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.role}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formLoginEmail">
                            <Form.Label>Rank</Form.Label>
                            <Form.Control as="select" custom>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.rank}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button
                            variant="secondary"
                            type="submit"
                            style={{
                                display: "block",
                                margin: "0 auto"
                            }}
                        >
                            Update
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default GameProfiles;
