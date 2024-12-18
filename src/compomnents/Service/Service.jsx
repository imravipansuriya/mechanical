import React from "react";
// import "./owl.carousel.css";
// import "./owl.carousel.min.css";
import "./Service.css";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

function Service() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* <div className="service_wrp">
        <Container>
          <Row>
            <Col lg="12">
              <Slider {...settings}>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </div> */}
    </>
  );
}

export default Service;
