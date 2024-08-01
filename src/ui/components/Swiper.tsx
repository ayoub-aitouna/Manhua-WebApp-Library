import React from "react";

type SwiperProps = {
	orientation: "horizontal" | "vertical";
	children: React.ReactNode;
};

const Swiper = ({ children, orientation }: SwiperProps) => {
	return <div>Swiper</div>;
};

export default Swiper;
