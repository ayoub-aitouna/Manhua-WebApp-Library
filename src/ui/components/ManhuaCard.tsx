import Link from "next/link";
import Image from "next/image";
import React from "react";

const ManhuaCard = () => {
  return (
    <div className="max-w-[200px]">
      {/* manhua cover */}
      <div className="overflow-hidden relative flex flex-col min-w-0 break-words h-[240px] sm:h-[445px] md:h-[200px] lg:h-[200px] xl:h-[260px] 2xl:h-[250px] mb-[5px] rounded-[5px]">
        <Link
          className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity w-full h-full"
          href="https://vortexscans.org/series/the-legendary-hunter-becomes-young-again"
          tabIndex={0}
          role="link"
        >
          <div
            className="w-full h-full transition-all duration-200 ease-in-out delay-0 rounded-[5px] hover:scale-110"
            style={{ overflow: "hidden", position: "relative" }}
          >
            <Image
              alt="Cover of The legendary hunter becomes young again"
              draggable="false"
              loading="lazy"
              width="400"
              height="320"
              decoding="async"
              data-nimg="1"
              className="h-full object-cover object-center absolute w-full z-0 transition-all duration-200 ease-in-out delay-0 rounded-[5px] hover:scale-110"
              style={{ color: "transparent" }}
              src="https://storage.vexmanga.com/public/upload/2024/06/12/The_legendary_hunter_becomes_young_again.webp"
            />
            <div
              aria-hidden="true"
              style={{
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                position: "absolute",
                zIndex: 0,
              }}
            ></div>
          </div>
        </Link>

        {/* country */}
        <span className="absolute z-1 px-1 py-[4px] right-[2px] top-[2px] h-8 w-8">
          <Image
            alt="MANHWA"
            loading="lazy"
            width="124"
            height="124"
            decoding="async"
            data-nimg="1"
            className="rounded-[3px] !object-cover"
            style={{ color: "transparent" }}
            src="/_next/static/media/manhwa.ee768e76.png"
          />
        </span>

        {/* trending */}
        <span className="absolute uppercase z-1 font-semibold text-xs backdrop-blur-[1px] px-1 py-[4px] rounded-full right-[5px] bottom-[5px] bg-red-500">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z"></path>
          </svg>
        </span>
      </div>

      {/* rating system */}
      <div className="flex justify-between mx-2 my-2">
        <div className="flex items-center gap-1 font-normal text-xs">
          <div className="numscore">4.8</div>
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 fill-orange-400 inline-block"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
          </svg>
        </div>
        <div className="flex items-center gap-1 font-normal text-xs">
          <span className="h-[10px] w-[10px] rounded-full inline-block relative bg-green-600"></span>
          <p className="font-normal text-xs">Ongoing</p>
        </div>
      </div>

      {/* title  */}
      <div className="flex justify-center items-center h-[50px]">
        <Link
          className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
          href="https://vortexscans.org/series/the-legendary-hunter-becomes-young-again"
          tabIndex={0}
          role="link"
        >
          <h1 className="text-[15px] text-white overflow-hidden font-bold text-center line-clamp-2 capitalize hover:text-primary-500">
            The legendary hunter becomes young again
          </h1>
        </Link>
      </div>

      {/* recent chapters */}
      <div>
        <Link
          className="relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity w-full center data-[focus-visible=true]:outline-offset-2 shadow-medium transition-transform-background motion-reduce:transition-none border-transparent dark:bg-gray-500/20 flex items-center justify-between mb-[5px] px-2.5 py-2 rounded-[5px] hover:dark:bg-default-400/20 text-white visited:!text-gray-500"
          href="https://vortexscans.org/series/the-legendary-hunter-becomes-young-again/chapter-15"
          tabIndex={0}
          role="link"
        >
          <div className="chapterName overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px] inline-block text-[12px] font-bold leading-none text-left align-baseline rounded px-[0.4em] py-[0.25em]">
            Chapter 15
          </div>
          <div className="flex justify-between items-center text-[60%] text-gray-400">
            <span className="flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 384 512"
                className="dot-animation ml-1 text-red-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M112.5 301.4c0-73.8 105.1-122.5 105.1-203 0-47.1-34-88-39.1-90.4.4 3.3.6 6.7.6 10C179.1 110.1 32 171.9 32 286.6c0 49.8 32.2 79.2 66.5 108.3 65.1 46.7 78.1 71.4 78.1 86.6 0 10.1-4.8 17-4.8 22.3 13.1-16.7 17.4-31.9 17.5-46.4 0-29.6-21.7-56.3-44.2-86.5-16-22.3-32.6-42.6-32.6-69.5zm205.3-39c-12.1-66.8-78-124.4-94.7-130.9l4 7.2c2.4 5.1 3.4 10.9 3.4 17.1 0 44.7-54.2 111.2-56.6 116.7-2.2 5.1-3.2 10.5-3.2 15.8 0 20.1 15.2 42.1 17.9 42.1 2.4 0 56.6-55.4 58.1-87.7 6.4 11.7 9.1 22.6 9.1 33.4 0 41.2-41.8 96.9-41.8 96.9 0 11.6 31.9 53.2 35.5 53.2 1 0 2.2-1.4 3.2-2.4 37.9-39.3 67.3-85 67.3-136.8 0-8-.7-16.2-2.2-24.6z"></path>
              </svg>
              <span>New</span>
            </span>
          </div>
        </Link>
        <Link
          className="relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity w-full center data-[focus-visible=true]:outline-offset-2 shadow-medium transition-transform-background motion-reduce:transition-none border-transparent dark:bg-gray-500/20 flex items-center justify-between mb-[5px] px-2.5 py-2 rounded-[5px] hover:dark:bg-default-400/20 text-white visited:!text-gray-500"
          href="https://vortexscans.org/series/the-legendary-hunter-becomes-young-again/chapter-14"
          tabIndex={0}
          role="link"
        >
          <div className="chapterName overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px] inline-block text-[12px] font-bold leading-none text-left align-baseline rounded px-[0.4em] py-[0.25em]">
            Chapter 14
          </div>
          <div className="flex justify-between items-center text-[60%] text-gray-400">
            <time dateTime="4 days">4 days</time>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ManhuaCard;
