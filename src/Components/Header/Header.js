import React from "react";
import { Container, Nav, Navbar, Stack, Button } from "react-bootstrap";

const Hader = () => {
  return (
    <Navbar expand="lg" bg="white">
      <Container fluid>
        <Navbar.Brand to="/home">Health Care Bd</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link to="/home">Home</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            <Nav.Link to="/services">Services</Nav.Link>
            <Nav.Link to="/find-doctor">Find a Doctor</Nav.Link>
          </Nav>

          <Nav>
            <Stack className=" d-none d-lg-inline  " gap={2}>
              <div className="text-danger">Contract</div>
              <h6>+8801749160165</h6>
            </Stack>

            <Nav.Link to="/apointment">
              <Button variant="primary"> Apointment</Button>
            </Nav.Link>

            <Nav.Link to="/login">
              <Button variant="primary">LOGIN / SIGNUP</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Hader;
