import { Button, Col, Container, Dropdown, DropdownButton, Form, Row } from "react-bootstrap";
import Hero from "../../compomnents/Hero/Hero";


import Header from "../../compomnents/Header/Header";
import "./AboutUS.css"
import Service from "../../compomnents/Service/Service";
import Process from "../../compomnents/Process/Process";
import Aboutus from "../../compomnents/Aboutus/About";

import { CiPlay1 } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import Team from "../../compomnents/Team/Team";
import Footer from "../../compomnents/Footer/Footer";
import Weare from "../../compomnents/We are/Weare";

function AboutUS() {
    return (
        <>
            <Header />
            <Hero />
            <Aboutus />
            <Weare/>
            <Process />
            <div className="video_wrp">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="explore_wrp">
                                <h6>Explore</h6>

                                <h4>Our Promo Video</h4>

                                <div className="play_icon">
                                    <button>
                                        <CiPlay1 />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Team />
            <div className="appointment">
                <Container>
                    <Row>
                        <Col lg="5" md="12">
                            <div className="ready">
                                <h5>Book Now</h5>
                                <h4>Make Your Appointment</h4>
                                <p>
                                    Get special repaire service for your car from our experts
                                    with appointmet and win car wash Free.
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

export default AboutUS;
