import { Col, Container, Row } from "react-bootstrap";
import "./Comingsoon.css";
import Timer from "../Timer/Timer";

function Commingsoon() {
  return (
    <>
      <div className="coming_soon_page overlay-bg">
        <Container>
          <Row>
            <Col lg="12">
              <div className="coming_soon_title">
                <h3>COMING SOON</h3> 
                <Timer/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Commingsoon;
