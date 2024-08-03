"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

type SwiperProps = {
	children: React.ReactNode;
	Settings: Settings;
};

const Swiper = ({ children, Settings }: SwiperProps) => {
	return (
		<div className='slider-container overflow-hidden cursor-pointer'>
			<Slider {...Settings}>{children}</Slider>
		</div>
	);
};

export default Swiper;
