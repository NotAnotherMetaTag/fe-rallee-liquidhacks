import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

function PersonalProfile() {
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
        firstName: yup
            .string()
            .min(1, "Please enter your first name")
            .required("Please enter your first name"),
        lastName: yup
            .string()
            .min(1, "Please enter your last name")
            .required("Please enter your last name"),
        email: yup
            .string()
            .email("Invalid email")
            .required("Please enter your email"),
        bio: yup
            .string()
            .min(1, "Please enter a bio")
            .required("Please enter a bio")
    });

    return (
        <Formik {...{ initialValues, validationSchema, onSubmit }}>
            {({ handleSubmit, getFieldProps, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="formLoginEmail">
                        <Form.Label>Username</Form.Label>
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
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder=""
                            {...getFieldProps("firstName")}
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formLoginEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder=""
                            {...getFieldProps("lastName")}
                            isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formLoginEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            {...getFieldProps("email")}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formLoginEmail">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder=""
                            {...getFieldProps("bio")}
                            isInvalid={!!errors.bio}
                            rows={4}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.bio}
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
    );
}

export default PersonalProfile;
