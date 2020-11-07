import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Header.scss";

function Header() {
    return (
        <Navbar className="header-nav" variant="dark" expand="lg">
            <Navbar.Brand as={NavLink} to="/">
                <img
                    src={process.env.PUBLIC_URL + "/Logo/White_Rainbow.svg"}
                    alt="Rallee Logo"
                    width="175px"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/profile">
                        Profile
                    </Nav.Link>
                </Nav>
                <Nav className={("mr-auto", "justify-content-end")}>
                    <Nav.Link as={NavLink} to="/login">
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
