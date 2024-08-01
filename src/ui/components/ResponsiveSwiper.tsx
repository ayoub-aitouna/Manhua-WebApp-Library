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

const ResponsiveSwiper = ({
  children,
  orientation,
  slidesToShow,
}: SwiperProps) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
 
  };

  return (
    <div className="slider-container overflow-hidden cursor-pointer">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default ResponsiveSwiper;
