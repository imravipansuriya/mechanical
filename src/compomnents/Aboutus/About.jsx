 
import hero from "../../assets/image/hero.jpg";
import about from "../../assets/image/about.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
import { IoCheckmarkSharp } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import "./About.css";

function Aboutus() {
  return (
    <>
      <div className="about_us">
        <Container>
          <Row>
            <Col lg="6" Col md="12">
              <div className="about_info">
                <div className="about_one">
                  <img src={hero} alt="" />
                </div>

                <div className="about_wrp">
                  <img src={about} alt="" />
                </div>

                <div className="certificate_wrp">
                  <div className="certificate_info">
                    <PiCertificate />
                  </div>
                  <h6>100%</h6>
                  <p>Quality Service</p>
                </div>
              </div>
            </Col>

            <Col lg="6" Col md="12" offset-lg-1>
              <div className="about_details">
                <h6>ABOUT US</h6>
                <h4>
                  Care <span>x</span> Car Service & Repair
                </h4>

                <p>
                  Car repair quisque sodales dui ut varius vestibulum drana
                  tortor turpis porttiton tellus eu euismod nisl massa ut odio
                  in the miss volume placerat urna, a lacinia eros nunta urna
                  mauris, vehicula rutrum tempus in the interdum felis.
                </p>

                <div className="offer_details">
                  <ul>
                    <li>
                      <IoCheckmarkSharp />
                      <a href="#">We offer multiple services</a>
                    </li>

                    <li>
                      <IoCheckmarkSharp />
                      <a href="#">Multiple car repair locations</a>
                    </li>

                    <li>
                      <IoCheckmarkSharp />
                      <a href="#">Original products</a>
                    </li>
                  </ul>
                </div>

                <Button className="more_btn">
                  Read More <FaArrowRightLong />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Aboutus;
