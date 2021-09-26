import Slider from "react-slick";
import React from "react";
import Life from "./Life";
import Growth from "./Growth";
import Movement from "./Movement";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="whole-carousel">
      <Slider {...settings}>
        <div>
          <Life />
        </div>
        <div>
          <Growth />
        </div>
        <div>
          <Movement />
        </div>
      </Slider>
    </div>
  );
}
