 
import Container from "react-bootstrap/Container";
import white from "../../assets/image/white.png";
import Form from "react-bootstrap/Form";
import "./Footer.css";
import { Col, InputGroup, Row } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { TbMapPin2 } from "react-icons/tb";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

const  Footer = ()=> {
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col lg="12">
              <div className="footer_contact_link">
                <div className="footer_contact_link_wrapper">
                  <div className="footer_contact_link_wrapper_one">
                    <div className="footer_contact_link_icon">
                      <div className="icon_footer">
                        <FiPhoneCall />
                      </div>
                    </div>
                    <div className="footer_contact_link_content">
                      <h6>Call us</h6>
                      <p>855 100 4444</p>
                    </div>
                  </div>
                  <div className="footer_contact_link_divider"></div>
                  <div className="footer_contact_link_wrapper_one">
                    <div className="footer_contact_link_icon">
                      <div className="icon_footer">
                        <IoMailOpenOutline />
                      </div>
                    </div>
                    <div className="footer_contact_link_content">
                      <h6>Write to us</h6>
                      <p>info@carex.com</p>
                    </div>
                  </div>
                  <div className="footer_contact_link_divider"></div>
                  <div className="footer_contact_link_wrapper_one">
                    <div className="footer_contact_link_icon">
                      <div className="icon_footer">
                        <TbMapPin2 />
                      </div>
                    </div>
                    <div className="footer_contact_link_content">
                      <h6>Address</h6>
                      <p>24 King St, SC 29401 USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="second_footer_menu">
            <Row>
              <Col lg="4" Col md="4">
                <div className="footer_menu">
                  <div className="footer_logo_wrp">
                    <a href="#">
                      <img src={white} alt="" />
                    </a>
                  </div>

                  <div className="footer_text">
                    <p>
                      Carex imperdiet sapien porttito the bibenum ellentesue the
                      commodo erat nesuen.
                    </p>

                    <div className="footer_social_media">
                      <ul>
                        <li>
                          <a href="#">
                            <FaWhatsapp />
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <FaFacebookF />
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <TfiYoutube />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg="4" Col md="4">
                <div className="link_wrp quick_link-wrap">
                  <h3>Quick Links</h3>

                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>

                    <li>
                      <a href="#">Services</a>
                    </li>

                    <li>
                      <a href="#">Pricing</a>
                    </li>

                    <li>
                      <a href="#">Team</a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg="4" Col md="4">
                <div className="footer_menu">
                  <div className="link_wrp">
                    <h3>Subscribe</h3>
                  </div>

                  <div className="footer_text">
                    <p>
                      Want to be notified about our services. Just sign up and
                      we'll send you a notification by email.
                    </p>

                    <div className="footer_social_media">
                      <InputGroup className="email_wrp">
                        <Form.Control
                          className="email_list"
                          placeholder="Email Address"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2" className="send_wrp">
                          Send
                        </InputGroup.Text>
                      </InputGroup>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <Row>
            <Col lg="12">
              <div className="copyright_section">
                <p className="mb-0">
                  ©2024 <a href="#">DuruThemes</a>. All rights reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
