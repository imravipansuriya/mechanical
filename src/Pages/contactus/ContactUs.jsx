import {
  Col,
  Container,
  Row,
  Form,
  DropdownButton,
  Button,
  Dropdown,
} from "react-bootstrap";
import Header from "../../compomnents/Header/Header";
import Footer from "../../compomnents/Footer/Footer";
import { BsTicketDetailed } from "react-icons/bs";
import {
  FaArrowRightLong,
  FaCarOn,
  FaCarSide,
  FaMapLocationDot,
} from "react-icons/fa6";
import { IoCall, IoMailOutline, IoPricetag } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";
import "./ContactUs.css";

function ContactUs() {
  const googleMapSrc = "https://www.google.com/maps/embed?pb=!1m18!2m12!...";
  return (
    <>
      <Header />
      <div className="hero_wrp">
        <Row>
          <Col lg="12">
            <div className="hero_details">
              <h6>Get in touch</h6>
              <h1>
                Contact <span>Us</span>
              </h1>
            </div>
          </Col>
        </Row>
      </div>

      <div className="process_wrp">
        <Container>
          <Row>
            <Col lg={4} md={12} sm={12}>
              <div className="booking_details process_card">
                <MdMailOutline />
                <div className="booking_info">
                  <h5>Email us</h5>

                  <p>appointment@carex.com</p>
                  <div class="numb">
                    <MdMailOutline />
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4} md={12} sm={12}>
              <div className="booking_details">
                <FaMapLocationDot />
                <div className="booking_info">
                  <h5>Our address</h5>

                  <p>2424 King St. SC 29401 USA</p>
                  <div class="numb">
                    <FaMapLocationDot />
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4} md={12} sm={12}>
              <div className="booking_details">
                <IoCall />
                <div className="booking_info">
                  <h5>Call us</h5>

                  <p>855 100 4444</p>
                  <div class="numb">
                    <IoCall />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="hours_details">
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="hr_wrp">
                <h5>Opening Hours</h5>

                <div class="opening_hours">
                  <ul>
                    <li>
                      <div class="day_wrp">MondayFriday</div>

                      <span>8:00 AM - 7:00 PM</span>
                    </li>
                    <li>
                      <div class="day_wrp">Saturday</div>

                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li>
                      <div class="day_wrp">Sunday</div>
                      <div class="time_wrp"></div> <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="hr_wrp">
                <h5>Contact Info</h5>

                <div class="opening_hours">
                  <ul>
                    <li>
                      <div class="footer_contact_link_wrapper_one">
                        <div class="footer_contact_link_icon">
                          <div class="icon_footer">
                            <IoCall />
                          </div>
                        </div>
                        <div class="footer_contact_link_content">
                          <p>855 100 4444</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="footer_contact_link_wrapper_one">
                        <div class="footer_contact_link_icon">
                          <div class="icon_footer">
                            <MdMailOutline />
                          </div>
                        </div>
                        <div class="footer_contact_link_content">
                          <p>info@carex.com</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="footer_contact_link_wrapper_one">
                        <div class="footer_contact_link_icon">
                          <div class="icon_footer">
                            <FaMapLocationDot />
                          </div>
                        </div>
                        <div class="footer_contact_link_content">
                          <p>24 King St, SC 29401 USA</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <div className="touch_wrp">
                <h5>Get in touch</h5>

                <div className="form_details contact_form">
                  <Row>
                    <Col lg="12">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          className="form_input"
                          type="Name"
                          placeholder="Your Name*"
                        />
                      </Form.Group>
                    </Col>

                    <Col lg="6">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          className="form_input"
                          type="Name"
                          placeholder="Your Email*"
                        />
                      </Form.Group>
                    </Col>

                    <Col lg="6">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          className="form_input"
                          type="Name"
                          placeholder="Your Number*"
                        />
                      </Form.Group>
                    </Col>

                    <Col lg="12">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          className="form_input"
                          type="Name"
                          placeholder="Subject*"
                        />
                      </Form.Group>
                    </Col>

                    <Col lg="12">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          as="textarea"
                          rows={3}
                          className="form_input"
                          placeholder="Message*"
                        />
                      </Form.Group>
                    </Col>

                    <Button>Send message</Button>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl"
          className="w-100"
          height="400"
          loading="lazy"
        ></iframe>
      </div>

      <div className="appointment">
        <Container>
          <Row>
            <Col lg="5" md="12">
              <div className="ready">
                <h5>Book Now</h5>
                <h4>Make Your Appointment</h4>
                <p>
                  Get special repaire service for your car from our experts with
                  appointmet and win car wash Free.
                </p>
              </div>
              <div className="help">
                <div className="icon">
                  <span className="carex_phone">
                    <TbPhoneCall />
                  </span>
                </div>
                <div className="text">
                  <p>Need Any Help?</p>
                  <a>855 100 4444</a>
                </div>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="booking_box">
                <div className="head_box">
                  <h5>Appointment</h5>
                  <h4>Book For A Service</h4>
                </div>

                <div className="form_wrp">
                  <Row>
                    <Col>
                      <div className="form_details">
                        <Row>
                          <Col lg="6">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                className="form_input"
                                type="Name"
                                placeholder="Your name"
                              />
                            </Form.Group>
                          </Col>

                          <Col lg="6">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                className="form_input"
                                type="Name"
                                placeholder="Your Phone"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </div>

                      <div className="form_details">
                        <Row>
                          <Col lg="6">
                            <Form.Group controlId="datePicker" className="mb-3">
                              <Form.Control
                                className="form_input date_list"
                                type="date"
                                placeholder="Service Date"
                              />
                            </Form.Group>
                          </Col>

                          <Col lg="6">
                            <DropdownButton
                              className="form_input mb-3"
                              id="dropdown-basic-button"
                              title="Service time"
                            >
                              <Dropdown.Item
                                href="#/action-1"
                                className="service_wrp"
                              >
                                Service time
                              </Dropdown.Item>

                              <Dropdown.Item href="#/action-1">
                                10:00 am
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                11:00 am
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                12:00 pm
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                14:00 pm
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                16:00 pm
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                18:00 pm
                              </Dropdown.Item>
                            </DropdownButton>
                          </Col>
                        </Row>
                      </div>

                      <div className="form_details">
                        <Row>
                          <Col lg="6">
                            <DropdownButton
                              className="form_input service_list mb-3"
                              id="dropdown-basic-button"
                              title="Services"
                            >
                              <Dropdown.Item
                                href="#/action-1"
                                className="service_wrp"
                              >
                                Services
                              </Dropdown.Item>

                              <Dropdown.Item href="#/action-1">
                                Car Towing
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Hail Damage
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Car Wash
                              </Dropdown.Item>
                            </DropdownButton>
                          </Col>

                          <Col lg="6">
                            <DropdownButton
                              className="form_input mb-3"
                              id="dropdown-basic-button"
                              title=" Service Master"
                            >
                              <Dropdown.Item
                                href="#/action-1"
                                className="service_wrp"
                              >
                                Service Master
                              </Dropdown.Item>

                              <Dropdown.Item href="#/action-1">
                                Micheal
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Daniel
                              </Dropdown.Item>
                            </DropdownButton>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <div className="now_wrp">
                      <Button>Book Now</Button>
                    </div>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
