import React from "react";
import "./css/comp.css";
// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: false,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className="testimonial-comp">
      <div className="container-lg">
        <h6 className="text-uppercase text-center fs-4 fw-normal ">
          Testimonials
        </h6>
        <h4 className="fs-1 fw-bold text-center lh-1 col-md-8 col-lg-6 mx-auto mt-3">
          Customer Experiences <br /><span className="colora">With Our Platform</span>
        </h4>
        {/* <p className="text-center col-md-6 col-11 mx-auto mt-4 fs-5 colorb sub-title">
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p> */}
        <div className="container founders pt-5">
          {/* <div className="d-flex flex-wrap justify-content-center gap-5"> */}
          <div className="slider-container">
          <Slider {...settings}>
            <div>
            <div className="text-center founder-div pt-5 pb-4 px-lg-5 px-3 d-flex flex-column justify-content-between">
              <h4 className="colorb fs-3 fw-normal mt-3">
                "With ONDC + Amazon synergy, we scaled from lOL to E2Cr/ month.
                Experiences Digital made it effortless."
              </h4>
              <div>
              <h5 className="mt-5 fs-4 fw-sb">Arjun Reddy</h5>
              <h6 className="fs-5 colorb">Founder, EcoEssentials (FMCG)</h6>
              </div>
            </div></div>
            {/*  */}
            <div>
            <div className="text-center founder-div pt-5 pb-4 px-lg-5 px-3 d-flex flex-column justify-content-between">
              <h4 className="colorb fs-3 fw-normal mt-3">
                They migrated us from Shopify to ONDC without a single day of
                downtime. Pure mastery.
              </h4>
              <div>
              <h5 className="mt-5 fs-4 fw-sb">Neha Kapoor</h5>
              <h6 className="fs-5 colorb">CEO, UrbanCraft (Handmade Lifestyle)</h6>
              </div>
            </div></div>
            </Slider>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
