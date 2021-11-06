import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="m-auto container">
      <h2 className="text-center text-primary">What Patient say about us</h2>
      <Row className="  m-auto">
        <Col xs={12} md={4}>
          <Card>
            <Card>
              <div className=" row d-flex justify-content-center">
                <Image
                  className="col-6 m-2 p-2"
                  src="https://doccure-react.dreamguystech.com/template-cardiology/45c8bd6e8a9345b55460bf1038148396.jpg"
                  roundedCircle
                />

                <h6 className="col-6">Mahmudul Hasan</h6>
              </div>
            </Card>
            <Card.Body>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little
                bit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, pariatur.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card>
              <div className=" row d-flex justify-content-center">
                <Image
                  className="col-6 m-2 p-2"
                  src="https://doccure-react.dreamguystech.com/template-cardiology/e3bebc0cb7f61464e0eb26677ffe84a2.jpg"
                  roundedCircle
                />

                <h6 className="col-6">Muhammad Kabir </h6>
              </div>
            </Card>
            <Card.Body>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little
                bit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, pariatur.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card>
              <div className=" row d-flex justify-content-center">
                <Image
                  className="col-6 m-2 p-2"
                  src="https://doccure-react.dreamguystech.com/template-cardiology/32e72c017cd1be6156666c991d8ea7fe.jpg"
                  roundedCircle
                />

                <h6 className="col-6">Ayesha Binte Nafsa</h6>
              </div>
            </Card>
            <Card.Body>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little
                bit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, pariatur.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
