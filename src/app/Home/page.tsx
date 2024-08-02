import Swiper from "@/ui/components/Swiper";
import React from "react";
import Image from "next/image";
import LargePost from "@/ui/components/LargePost";
import SeriesList from "@/ui/components/SeriesList";
import ManhuaCard from "@/ui/components/ManhuaCard";
import CardsSwiper from "@/ui/components/MangaSwiper/Swiper";

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
  return (
    <section className="flex flex-col gap-20 mt-10  mx-auto px-10 min-h-dvh">
      <Swiper>
        {Array(6)
          .fill(0)
          .map((_) => (
            <LargePost />
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

      
      <CardsSwiper>
        <></>
      </CardsSwiper>


      <div className="flex flex-row justify-center items-start gap-4 container mx-auto">
        <div className="flex-1">
          <SeriesList title="Latest Update">
            {Array(20)
              .fill(0)
              .map((_) => (
                <ManhuaCard />
              ))}
          </SeriesList>
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
