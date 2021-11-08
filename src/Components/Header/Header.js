import "../Header/Header.css";
import React from "react";
import { Container, Nav, Navbar, Stack, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user, error, SignInUsingGoogle, SignInUsingGit, handleSignOut } =
    useAuth();
  return (
    <Navbar expand="lg" bg="white">
      <Container fluid>
        <Navbar.Brand to="/home">Health Care Bd</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/home" className="text-decoration-none">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/about" className="text-decoration-none">
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/services" className="text-decoration-none">
                Services
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/find-doctor" className="text-decoration-none">
                Find a Doctor
              </NavLink>
            </Nav.Link>
          </Nav>

          <Nav>
            <div className="header-contact-img d-none d-lg-inline ms-3 ">
              <i className="far fa-hospital"></i>
            </div>
            <Stack className=" d-none d-lg-inline ms-3 " gap={2}>
              <div className="text-warning">Contract</div>
              <h6>+8801749160165</h6>
            </Stack>

            <Nav.Link>
              <NavLink to="/apointment">
                <Button varient="primary">Apointment</Button>
              </NavLink>
            </Nav.Link>
            <Nav.Link className="text-warning">{user.displayName}</Nav.Link>
            <Nav.Link className="text-warning">{user.email}</Nav.Link>

            <Nav.Link as={NavLink} to="/login">
              <NavLink
                to="/login"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#8a2be2",
                }}
              >
                {!user.displayName && !user.email ? (
                  <Button varient="primary"> LOGIN / SIGNUP</Button>
                ) : (
                  <Button onClick={handleSignOut} varient="primary">
                    LOGOUT
                  </Button>
                )}
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
