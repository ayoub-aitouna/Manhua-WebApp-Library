import Swiper from "@/app/ui/components/Swiper";
import React from "react";
import Image from "next/image";
import LargePost from "@/app/ui/components/LargePost";
import ManhuaCard from "@/app/ui/components/ManhuaCard";
import { Settings } from "react-slick";
import MangaCard from "@/app/ui/components/MangaSwiper/MangaCard";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => (
  <div className="flex justify-between gap-6 bg-white/10 p-4 rounded-lg">
    {children}
  </div>
);

const ShareButton = () => (
  <div
    className="sharethis-inline-share-buttons st-left st-has-labels st-inline-share-buttons st-center st-animated"
    id="st-1"
  >
    <div
      className="st-btn st-first st-last st-remove-label"
      data-network="sharethis"
      style={{ display: "inline-block" }}
    >
      <Image
        alt="sharethis sharing button"
        src="https://platform-cdn.sharethis.com/img/sharethis.svg"
        width={32}
        height={32}
      />
    </div>
  </div>
);

interface SocialLinkProps {
  href: string;
  imgSrc: string;
  label: string;
  bgColor: string;
}

const SocialLink = ({ href, imgSrc, label, bgColor }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={label}
    className={`h-10 gap-2 px-6 ${bgColor} hover:bg-opacity-80 flex justify-center items-center rounded-full`}
  >
    <Image
      alt={`${label} Image Link`}
      width={128}
      height={128}
      src={imgSrc}
      className="w-6"
    />
    <div>{label}</div>
  </a>
);

const page = () => {
  const headerSwiperSettings = {
    className: `center`,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: false,
    waitForAnimate: false,
    arrows: false,
    speed: 500,
  };

  const PapularSwiperSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="flex container flex-col gap-20 mt-10  mx-auto px-10 min-h-dvh">
      <Swiper Settings={headerSwiperSettings}>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <LargePost key={index} />
          ))}
      </Swiper>

      <div className="w-full mx-auto mt-2">
        <div className="grid 2xl:grid-cols-3 gap-4">
          <Card>
            <div className="flex gap-4 justify-center items-center">
              <div className="h-full w-1 rounded-lg bg-white/20"></div>
              <div className="grid">
                <div className="font-medium truncate">Share Vortex Scans</div>
                <div className="text-sm truncate">to your friends</div>
              </div>
            </div>
            <ShareButton />
          </Card>

          <Card>
            <div className="flex gap-4 justify-center items-center">
              <div className="h-full w-1 rounded-lg bg-white/20"></div>
              <div className="grid">
                <div className="font-medium truncate">Join Our Socials</div>
              </div>
            </div>
            <SocialLink
              href="https://discord.com/invite/YsW2Vq5R7R"
              imgSrc="https://api.iconify.design/cbi:discord.svg?color=%23ffffff"
              label="Discord"
              bgColor="bg-[#5865F2]"
            />
          </Card>

          <Card>
            <div className="flex gap-4 justify-center items-center">
              <div className="h-full w-1 rounded-lg bg-white/20"></div>
              <div className="grid">
                <div className="font-medium">Donate Us</div>
                <div className="text-sm">to support us</div>
              </div>
            </div>
            <SocialLink
              href="https://ko-fi.com/vortexscans"
              imgSrc="https://api.iconify.design/cib:ko-fi.svg?color=%23ffffff"
              label="Ko-fi"
              bgColor="bg-blue-400"
            />
          </Card>
        </div>
      </div>
      <h1 className="text-2xl text-white font-semibold">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="fire-flame-curved"
          className="h-5 w-5 ml-2 inline-block align-middle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z"
          ></path>
        </svg>
        Popular Today
      </h1>
      <Swiper Settings={PapularSwiperSettings}>
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <MangaCard
              key={index}
              href=""
              title={"" + index}
              coverSrc=""
              rating={0}
            />
          ))}
      </Swiper>

      <div className="flex flex-row justify-center items-start gap-4 container mx-auto">
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl text-white font-semibold">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="h-7 w-7 ml-2 inline-block align-middle"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"></path>
            </svg>
            Latest Update
          </h1>
          <div className="flex fex-row flex-wrap gap-6">
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <ManhuaCard key={index} />
              ))}
          </div>
        </div>
        <div className="w-60 h-60 bg-red-50"></div>
      </div>
      <div className="fixed dark:md:block dark:opacity-100 -bottom-[20%] -left-[20%] z-[-1]">
        <Image
          src="/assets/bg-image.png"
          width={1266}
          height={1211}
          className="relative z-10 opacity-100 shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          alt="docs left background"
        />
      </div>
    </section>
  );
};

export default page;
