"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./swiper.module.css";
import Slider from "react-slick";
import MangaCard from "./MangaCard";

type SwiperProps = {
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
  slidesToShow?: number;
};

const CardsSwiper = ({ children, orientation, slidesToShow }: SwiperProps) => {
  const settings = {
    className: `center ${orientation === "vertical" ? "vertical-slider" : ""}`,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: slidesToShow || 3,
    swipeToSlide: true,
    waitForAnimate: false,
    speed: 1000,
    afterChange: function (index: any) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className="manga-slider-container overflow-hidden cursor-pointer">
      <Slider {...settings}>
        {Array(20)
          .fill(0)
          .map((_) => (
            <MangaCard href="" title="" coverSrc="" rating={0} />
          ))}
      </Slider>
    </div>
  );
};

export default CardsSwiper;
