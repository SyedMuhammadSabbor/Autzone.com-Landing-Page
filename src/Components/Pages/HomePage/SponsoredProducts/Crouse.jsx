import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Optional for default styling
import React from "react";
import "../../../reusable/customCarousal.css";
import SampleNextArrow from "../../../reusable/SampleNextArrow";
import SamplePrevArrow from "../../../reusable/SamplePrevArrow";

const carouselSettin = {
  dots: false,
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  swipeToSlid: true,
  autoplay: false,
  adaptiveHeight: true,
  speed: 500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow showElement={true} />,
};



const Crouse = ({children })=> {
  
  return (
    <div className="customCarousal">
      <Slider {...carouselSettin}>{children}</Slider>
    </div>
  );
};

export default Crouse;
