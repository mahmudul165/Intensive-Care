import React from "react";
import { Carousel, Button } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="http://wpthemesgrid.com/themes/mediplus/img/slider.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div>
            <h2>
              We Provide <span className="text-primary">Medical</span> Service
              That You Can <span className="text-primary">Trust</span>!
            </h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button className="mx-2" variant="primary">
              Contract Now
            </Button>
            <Button variant="secondary">Apointment</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="http://wpthemesgrid.com/themes/mediplus/img/slider2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div>
            <h2>
              We Provide <span className="text-primary">Medical</span> Service
              That You Can <span className="text-primary">Trust</span>!
            </h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button className="mx-2" variant="primary">
              Contract Now
            </Button>
            <Button variant="secondary">Apointment</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://wpthemesgrid.com/themes/mediplus/img/slider3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div>
            <h2>
              We Provide <span className="text-primary">Medical</span> Service
              That You Can <span className="text-primary">Trust</span>!
            </h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button className="mx-2" variant="primary">
              Contract Now
            </Button>
            <Button variant="secondary">Apointment</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
