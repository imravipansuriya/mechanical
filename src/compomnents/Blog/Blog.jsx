import React from "react";
import {  Container} from "react-bootstrap";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import blogone  from "../../assets/image/blogone.jpg";
import blogthree  from "../../assets/image/blogthree.jpg";
import blogfour  from "../../assets/image/blogfour.jpg";
import blogfive  from "../../assets/image/blogfive.jpg";
import blogsix  from "../../assets/image/blogsix.jpg";
import "./Blog.css";
import { GoArrowUpRight } from "react-icons/go";
import Slider from "react-slick";


function Blog() {
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
            <h6>Our Blog</h6>
            <h4>Latest News</h4>
          </div>
          <div className="testimonial_image_wrp team_wrp ">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="slide_image_wrp blog_wrap">
                  <div className="slider_details wrapper_img">
                    <img src={blogone} alt="" />
                  </div>
                  <div className="wrapper_title">
                             <h6>Mechanic</h6>
                             <h4>Signs Of Transmission Failure</h4>
                             <span><FaArrowRight /></span>
                  </div>
                </div>

                <div className="slide_image_wrp blog_wrap">
                  <div className="slider_details wrapper_img">
                    <img src={blogthree} alt="" />
                  </div>
                  <div className="wrapper_title">
                             <h6>Car Repair</h6>
                             <h4>Old Car Engine Repair</h4>
                             <span><FaArrowRight /></span>
                  </div>
                </div>

                <div className="slide_image_wrp blog_wrap">
                  <div className="slider_details wrapper_img">
                    <img src={blogfour} alt="" />
                  </div>
                  <div className="wrapper_title">
                             <h6>Car Repair</h6>
                             <h4>Old Car Engine Repair</h4>
                             <span><FaArrowRight /></span>
                  </div>
                </div>

                <div className="slide_image_wrp blog_wrap">
                  <div className="slider_details wrapper_img">
                    <img src={blogfive} alt="" />
                  </div>
                  <div className="wrapper_title">
                             <h6>Battery</h6>
                             <h4>How to Change a Car Battery</h4>
                             <span><FaArrowRight /></span>
                  </div>
                  
                </div>

                <div className="slide_image_wrp blog_wrap">
                  <div className="slider_details wrapper_img">
                    <img src={blogsix} alt="" />
                  </div>
                  <div className="wrapper_title">
                             <h6>Engine</h6>
                             <h4>Why Does My Car Not Start?</h4>
                             <span><FaArrowRight /></span>
                  </div>
    
                </div>

                {/* <div className="slide_image_wrp">
                  <div className="slider_details">
                    <img src={Blogsix} alt="" />
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
                </div> */}
              </Slider>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Blog;