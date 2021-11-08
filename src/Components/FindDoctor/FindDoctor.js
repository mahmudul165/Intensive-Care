import React from "react";
import { Card, Col, Container, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import useService from "../hooks/useService";
import { Link, NavLink } from "react-router-dom";
const FindDoctor = () => {
  // use of fontawesome icon
  const element = <FontAwesomeIcon icon={faCalendar} />;
  const address = <FontAwesomeIcon icon={faLocationArrow} />;

  const [service] = useService();
  return (
    <Container className="my-5">
      <h2 className="text-primary text-center">
        Our Specialized Doctors <span className="text-warning">Doctors</span>
      </h2>

      {service.map((service) => {
        return (
          <Row xs={12} md={4} className="g-4 gy-4">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  width="180px"
                  height="300px"
                  className="rounded-circle p-2 m-2"
                  src={service.doctor_img}
                />
                <Card.Body>
                  <Card.Title className=" my-2 text-primary text-centar">
                    {service.doctor_name}
                  </Card.Title>
                  <h5 className=" my-2 py-2 text-primary text-centar">
                    {service.doctor_expertice}
                  </h5>
                  <Card.Text className="py-1 my-1">
                    <span>{address} </span>
                    {service.doctor_address}
                  </Card.Text>
                  <Row>
                    <Col>
                      <small>{service.doctor_phone}</small>
                    </Col>
                    <Col>
                      <small>{service.doctor_email} </small>
                    </Col>
                    <NavLink
                      to="/apointment"
                      className="btn btn-primary py-2 my-2"
                    >
                      <span>{element} </span>
                      Book Apointment
                    </NavLink>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default FindDoctor;
