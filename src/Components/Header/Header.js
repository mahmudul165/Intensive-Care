import "../Header/Header.css";
import React from "react";
import { Container, Nav, Navbar, Stack, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Hader = () => {
  return (
    <Navbar expand="lg" bg="white">
      <Container fluid>
        <Navbar.Brand to="/home">Health Care Bd</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/home"> Home </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/about">About</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/services"> Services</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/find-doctor"> Find a Doctor </NavLink>
            </Nav.Link>
          </Nav>

          <Nav>
            <div className="header-contact-img d-none d-lg-inline ms-3 ">
              <i className="far fa-hospital"></i>
            </div>
            <Stack className=" d-none d-lg-inline ms-3 " gap={2}>
              <div className="text-danger">Contract</div>
              <h6>+8801749160165</h6>
            </Stack>

            <Nav.Link>
              <NavLink to="/apointment"> Apointment </NavLink>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/login">
              <NavLink
                to="/login"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#8a2be2",
                }}
              >
                LOGIN / SIGNUP
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Hader;
