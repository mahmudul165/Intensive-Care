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
      <Row xs={1} md={1} className="  gy-2">
        {service.map((service) => (
          <div>
            {service.index == index && (
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    width="300px"
                    height="450px"
                    src={service.service_img}
                  />
                  <Card.Body>
                    <Card.Title className="gy-2 py-2 my-2 text-primary text-centar">
                      {service.service_name}
                    </Card.Title>
                    <Card.Text>{service.service_info}</Card.Text>
                  </Card.Body>
                  <Card>
                    <Button variant="primary">Add to Favourite</Button>
                  </Card>
                </Card>
              </Col>
            )}
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceDetails;
