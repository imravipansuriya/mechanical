import React from "react";
import teamone from "../../assets/image/team1.jpg";
import teamtwo from "../../assets/image/team2.jpg";
import teamthree from "../../assets/image/team3.jpg";
import teamfour from "../../assets/image/team4.jpg";
import teamfive from "../../assets/image/team5.jpg";
import teamsix from "../../assets/image/team6.jpg";
import { Container } from "react-bootstrap";
import "./Team.css";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

function Team() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="testimonial_wrp">
        <Container>
          <div className="testimonial_info">
            <h6>Certified Team</h6>
            <h4>Our Experts Team</h4>
          </div>
          <div className="testimonial_image_wrp team_wrp">
            <div className="slider-container">
              <div className="slider_datalist">
                <Slider {...settings}>
                  <div className="slide_image_wrp">
                    <div className="slider_details">
                      <img src={teamone} alt="" />
                    </div>

                    <div className="member_details">
                      <div className="person_name">
                        <h5>
                          <a href="#">Andrea Lion</a>
                        </h5>
                        <p>Customer Support</p>
                      </div>

                      <div className="arrow_datalist">
                        <GoArrowUpRight />
                      </div>
                    </div>
                  </div>

                  <div className="slide_image_wrp">
                    <div className="slider_details">
                      <img src={teamtwo} alt="" />
                    </div>

                    <div className="member_details">
                      <div className="person_name">
                        <h5>
                          <a href="#">Enrico Brown</a>
                        </h5>
                        <p>General Manager</p>
                      </div>

                      <div className="arrow_datalist">
                        <GoArrowUpRight />
                      </div>
                    </div>
                  </div>

                  <div className="slide_image_wrp">
                    <div className="slider_details">
                      <img src={teamthree} alt="" />
                    </div>

                    <div className="member_details">
                      <div className="person_name">
                        <h5>
                          <a href="#">Olivia Smith</a>
                        </h5>
                        <p>Engine Specialist</p>
                      </div>

                      <div className="arrow_datalist">
                        <GoArrowUpRight />
                      </div>
                    </div>
                  </div>

                  <div className="slide_image_wrp">
                    <div className="slider_details">
                      <img src={teamfour} alt="" />
                    </div>

                    <div className="member_details">
                      <div className="person_name">
                        <h5>
                          <a href="#">Pedro Martin</a>
                        </h5>
                        <p>Certified Technician</p>
                      </div>

                      <div className="arrow_datalist">
                        <GoArrowUpRight />
                      </div>
                    </div>
                  </div>

                  <div className="slide_image_wrp">
                    <div className="slider_details">
                      <img src={teamfive} alt="" />
                    </div>

                    <div className="member_details">
                      <div className="person_name">
                        <h5>
                          <a href="#"> Alberto Steve</a>
                        </h5>
                        <p>Certified Mechanic</p>
                      </div>

                      <div className="arrow_datalist">
                        <GoArrowUpRight />
                      </div>
                    </div>
                  </div>

                  <div className="slide_image_wrp">
                    <div className="slider_details">
                      <img src={teamsix} alt="" />
                    </div>

                    <div className="member_details">
                      <div className="person_name">
                        <h5>
                          <a href="#"> Wagner Brown</a>
                        </h5>
                        <p>Certified Engine</p>
                      </div>

                      <div className="arrow_datalist">
                        <GoArrowUpRight />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Team;
