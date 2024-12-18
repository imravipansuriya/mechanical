import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Hero.css";

const Hero = () => {
  return (
    <Container>
      <div className="hero_wrp">
        <Row>
          <Col lg="12">
            <div className="hero_details">
              <h6>Welcome to</h6>
              <h1>
                Auto Service, Maintenance <span>&</span> Repair
              </h1>
              <Button className="more_btn">
                Book Now <FaArrowRightLong />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Hero;
