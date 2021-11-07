import React from "react";
import { Card, Col, Container, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import useService from "../hooks/useService";
import { Link, NavLink } from "react-router-dom";
const Service = () => {
  // use of fontawesome icon
  const element = <FontAwesomeIcon icon={faInfo} />;
  const [service] = useService();
  return (
    <Container className="my-5">
      <h2 className="text-primary text-center">Our Different services</h2>
      <Row xs={1} md={2} className="g-4 gy-4">
        {service.map((service) => {
          // only last four service given my home page

          return (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  width="200px"
                  height="350px"
                  className="rounded-circle p-2 m-2"
                  src={service.service_img}
                />
                <Card.Body>
                  <Card.Title className="  text-primary text-centar">
                    {service.service_name}
                  </Card.Title>

                  <Card.Text>{service.service_info.slice(0, 150)}</Card.Text>
                  <Row>
                    {/* <NavLink to={}>
                      <Button>
                        {element}
                        Details
                      </Button>
                    </NavLink> */}
                    <Link
                      to={`/services/${service.index}`}
                      className="btn btn-primary"
                    >
                      <span>{element} </span>
                      Details
                    </Link>

                    {/* <Col>
                      <small>
                        {book}
                        {service.lecture} Lectures
                      </small>
                    </Col>
                    <Col>
                      <small>{service.price} Taka</small>
                    </Col> */}
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

export default Service;
