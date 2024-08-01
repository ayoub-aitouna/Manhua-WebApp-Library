import Swiper from "@/ui/components/Swiper";
import React from "react";
import Image from "next/image";
import LargePost from "@/ui/components/LargePost";
import SeriesList from "@/ui/components/SeriesList";
import ManhuaCard from "@/ui/components/ManhuaCard";
import MangaCard from "@/ui/components/MangaCard";
import ResponsiveSwiper from "@/ui/components/ResponsiveSwiper";

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

     
      <Swiper slidesToShow={6}>
        {Array(20)
          .fill(0)
          .map((_) => (
            <MangaCard
        title="Paranoid Mage"
        href=""
        coverSrc="https://storage.vexmanga.com/public/upload/2024/07/30/cover_f2c4409e30.webp"
        rating={5}
      />
          ))}
      </Swiper>
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
