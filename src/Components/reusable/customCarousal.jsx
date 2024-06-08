import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Optional for default styling
import React from "react";
import "./customCarousal.css";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";


const carouselSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  swipeToSlid: true,
  autoplay: false,
  adaptiveHeight: true,
  speed: 500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow showElement={false} />,
};



const CustomCarousel = ({props, children }) => {
  
  return (
    <div className="customCarousal">
      <Slider {...carouselSettings}>{children}</Slider>
    </div>
  );
};

export default CustomCarousel;
