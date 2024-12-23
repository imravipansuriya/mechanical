 
import "./Process.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRightLong, FaCarOn, FaCarSide } from "react-icons/fa6";
import { BsTicketDetailed } from "react-icons/bs";
import { IoPricetag } from "react-icons/io5";

function Process() {
  return (
    <>
      <div className="process_wrp">
        <div className="process_info">
          <h6>How We Work</h6>
          <h4>Our Process</h4>
        </div>
        <Container>
          <Row>
            <Col lg={3}  md={12}  sm={12}>
              <div className="booking_details process_card">
                <BsTicketDetailed />
                <div className="booking_info">
                  <h5>Book appointment</h5>

                  <p>Car lorem quisque sodales the varius vestibulum felis.</p>
                  <div class="numb">01</div>
                </div>
              </div>
            </Col>

            <Col lg={3}  md={12}  sm={12}>
              <div className="booking_details">
                <FaCarSide />
                <div className="booking_info">
                  <h5>Bring your Vehicle</h5>

                  <p>Car lorem quisque sodales the varius vestibulum felis.</p>
                  <div class="numb">02</div>
                </div>
              </div>
            </Col>

            <Col lg={3}  md={12}  sm={12}>
              <div className="booking_details">
                <FaCarOn />
                <div className="booking_info">
                  <h5>Get the Vehicle Repaired</h5>

                  <p>Car lorem quisque sodales the varius vestibulum felis.</p>
                  <div class="numb">03</div>
                </div>
              </div>
            </Col>

            <Col lg={3}  md={12}  sm={12}>
              <div className="booking_details">
                <IoPricetag />
                <div className="booking_info">
                  <h5>Ready for Deliver</h5>

                  <p>Car lorem quisque sodales the varius vestibulum felis.</p>
                  <div class="numb">04</div>
                </div>
              </div>
            </Col>
          </Row>

          <Button className="book_btn">
            Book Now <FaArrowRightLong />
          </Button>
        </Container>
      </div>
    </>
  );
}

export default Process;
