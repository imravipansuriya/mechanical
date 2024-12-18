import React from "react";
import testiominals from "../../assets/image/testiominals.jpg";
import { Container } from "react-bootstrap";
import profileOne from "../../assets/image/profileOne.jpg";
import teamthree from "../../assets/image/team1.jpg";
import "./Testimonial.css";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa6";

function Testimonial() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="testimonial_wrp">
        <Container>
          <div className="testimonial_info">
            <h6>Testimonials</h6>
            <h4>
              What <span>Customers</span> Say
            </h4>
          </div>
          <div className="testimonial_image_wrp">
            <div className="testimonial_image">
              <img src={testiominals} alt="" />
            </div>
            <div className="slider_wrp">
              <Slider {...settings} className="slider_details">
                <div className="slider_one">
                  <div className="slide_data">
                    <h5>Highly recommend the shop.</h5>
                    <p>
                      Came in for 'walk-in' inspection and oil change. Brown is
                      delight to deal with. He took my car right in, and
                      completed work in a short time. Terrific auto repair shop!
                    </p>
                  </div>

                  <div className="profile_details">
                    <div className="profile_image">
                      <img src={profileOne} alt="" />
                    </div>
                    <div className="profile_name">
                      <h6>Enrico White</h6>
                      <p>Customer</p>
                    </div>
                  </div>
                  <div className="quote_wrp">
                    <span class="quote">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>

                <div className="slider_one">
                  <div className="slide_data">
                    <h5>Terrific auto repair shop!</h5>
                    <p>
                      Came in for 'walk-in' inspection and oil change. Brown is
                      delight to deal with. He took my car right in, and
                      completed work in a short time. Highly recommend the shop.
                    </p>
                  </div>
                  <div className="profile_details">
                    <div className="profile_image">
                      <img src={teamthree} alt="" />
                    </div>
                    <div className="profile_name">
                      <h6>Olivia Brown</h6>
                      <p>Customer</p>
                    </div>
                  </div>

                  <div className="quote_wrp">
                    <span class="quote">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>

                <div className="slider_one">
                  <div className="slide_data">
                    <h5>Highly recommend the shop.</h5>
                    <p>
                      Came in for 'walk-in' inspection and oil change. Brown is
                      delight to deal with. He took my car right in, and
                      completed work in a short time. Terrific auto repair shop!
                    </p>
                  </div>

                  <div className="profile_details">
                    <div className="profile_image">
                      <img src={profileOne} alt="" />
                    </div>
                    <div className="profile_name">
                      <h6>Enrico White</h6>
                      <p>Customer</p>
                    </div>
                  </div>
                  <div className="quote_wrp">
                    <span class="quote">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>

                <div className="slider_one">
                  <div className="slide_data">
                    <h5>Terrific auto repair shop!</h5>
                    <p>
                      Came in for 'walk-in' inspection and oil change. Brown is
                      delight to deal with. He took my car right in, and
                      completed work in a short time. Highly recommend the shop.
                    </p>
                  </div>
                  <div className="profile_details">
                    <div className="profile_image">
                      <img src={teamthree} alt="" />
                    </div>
                    <div className="profile_name">
                      <h6>Olivia Brown</h6>
                      <p>Customer</p>
                    </div>
                  </div>

                  <div className="quote_wrp">
                    <span class="quote">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>

                <div className="slider_one">
                  <div className="slide_data">
                    <h5>Highly recommend the shop.</h5>
                    <p>
                      Came in for 'walk-in' inspection and oil change. Brown is
                      delight to deal with. He took my car right in, and
                      completed work in a short time. Terrific auto repair shop!
                    </p>
                  </div>
                  <div className="profile_details">
                    <div className="profile_image">
                      <img src={profileOne} alt="" />
                    </div>
                    <div className="profile_name">
                      <h6>Enrico White</h6>
                      <p>Customer</p>
                    </div>
                  </div>

                  <div className="quote_wrp">
                    <span class="quote">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>

                <div className="slider_one">
                  <div className="slide_data">
                    <h5>Highly recommend the shop.</h5>
                    <p>
                      Came in for 'walk-in' inspection and oil change. Brown is
                      delight to deal with. He took my car right in, and
                      completed work in a short time. Terrific auto repair shop!
                    </p>
                  </div>

                  <div className="profile_details">
                    <div className="profile_image">
                      <img src={profileOne} alt="" />
                    </div>
                    <div className="profile_name">
                      <h6>Enrico White</h6>
                      <p>Customer</p>
                    </div>
                  </div>
                  <div className="quote_wrp">
                    <span class="quote">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Testimonial;
