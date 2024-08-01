"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type SwiperProps = {
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
  slidesToShow?: number;
};

const Swiper = ({ children, orientation, slidesToShow }: SwiperProps) => {
  const settings = {
    className: `center ${orientation === "vertical" ? "vertical-slider" : ""}`,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: slidesToShow || 3,
    swipeToSlide: true,
    speed: 1000,
    afterChange: function (index: any) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className="slider-container overflow-hidden cursor-pointer">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Swiper;
