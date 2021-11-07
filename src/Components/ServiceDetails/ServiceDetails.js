import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import useService from "../hooks/useService";
const ServiceDetails = () => {
  const [service] = useService();
  const { index } = useParams();
  console.log(index);
  return (
    <Container className="my-5">
      <h2 className="text-primary text-center">Our services no :{index}</h2>
      <Row xs={1} md={1} className="g-4 gy-4">
        {service.map((service) => {
          return (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  width="300px"
                  height="450px"
                  src={service.service_img}
                />
                <Card.Body>
                  <Card.Title className="  text-primary text-centar">
                    {service.service_name}
                  </Card.Title>
                  <Card.Text>{service.service_info}</Card.Text>
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

export default ServiceDetails;
