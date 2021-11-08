import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="m-auto container my-3 py-3">
      <h2 className="text-center text-primary my-2 py-1">
        What Patient say about us
      </h2>
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
                Recently visited health check up Health care bd for a whole body
                check up. The entire process from check in to the end was
                seamless. The staff at the health check department was
                courteous, helpful and very attentive. I would highly recommend
                this to anyone looking for something similar services.
              </Card.Text>
              <div className="text-center star-style">
                <i className="fas fa-star star-style"></i>
                <i className="fas fa-star star-style"></i>
                <i className="fas fa-star star-style"></i>
                <i className="fas fa-star star-style"></i>
                <i className="far fa-star"></i>
              </div>
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
                Recently visited health check up Health care bd for a whole body
                check up. The entire process from check in to the end was
                seamless. The staff at the health check department was
                courteous, helpful and very attentive. I would highly recommend
                this to anyone looking for something similar services.
              </Card.Text>
              <div className="text-center star-style">
                <i className="fas fa-star star-style"></i>
                <i className="fas fa-star star-style"></i>
                <i className="fas fa-star star-style"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
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
                Recently visited health check up Health care bd for a whole body
                check up. The entire process from check in to the end was
                seamless. The staff at the health check department was
                courteous, helpful and very attentive. I would highly recommend
                this to anyone looking for something similar services.
                Provident, pariatur.
              </Card.Text>
              <div className="text-center star-style">
                <i className="fas fa-star star-style"></i>
                <i className="fas fa-star star-style"></i>
                <i className="fas fa-star star-style"></i>
                <i className="fas fa-star star-style"></i>
                <i className="far fa-star"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
