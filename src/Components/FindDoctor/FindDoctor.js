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
        Our Specilished <span className="text-warning">Doctors</span>
      </h2>
      <Row xs={2} md={3} className="g-4 gy-4">
        {service.map((service) => {
          // only last four service given my home page

          return (
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
                  <Card.Title className="  text-primary text-centar">
                    {service.doctor_name}
                  </Card.Title>
                  <h5 className=" my-2 py-2 text-primary text-centar">
                    {service.doctor_expertice}
                  </h5>

                  <Card.Text>
                    <span>{address} </span>
                    {service.doctor_address}
                  </Card.Text>
                  <Row>
                    {/* <NavLink to={}>
                      <Button>
                        {element}
                        Details
                      </Button>
                    </NavLink> */}
                    <Link to="/apointment" className="btn btn-primary">
                      <span>{element} </span>
                      Book Apointment
                    </Link>

                    <Col>
                      <small>{service.doctor_phone}</small>
                    </Col>
                    <Col>
                      <small>{service.doctor_email} </small>
                    </Col>
                  </Row>
                </Card.Body>
                {/* <Card.Footer>
                  <Button variant="primary">{shooping} Details</Button>
                </Card.Footer> */}
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default FindDoctor;
