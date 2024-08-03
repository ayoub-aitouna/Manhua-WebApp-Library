import Link from "next/link";
import Image from "next/image";
import React from "react";
import "@/app/ui/components/MangaSwiper/swiper.module.css";
interface MangaCardProps {
	title: string;
	href: string;
	coverSrc: string;
	rating: number;
}

const MangaCard: React.FC<MangaCardProps> = ({
	title,
	href,
	coverSrc,
	rating,
}) => {
	return (
		<Link
			href='/Home'
			className='relative max-w-[200px] items-center text-medium no-underline hover:opacity-80 '
			title='Operation: True Love'>
			<div className='card'>
				<div className='wrapper h-full'>
					<Image
						alt='Cover of Operation: True Love'
						draggable='false'
						loading='lazy'
						width={405}
						height={595}
						decoding='async'
						className='cover-image object-cover object-center h-[260px] rounded-md'
						style={{ color: "transparent" }}
						src='https://storage.vexmanga.com/public/upload/2024/06/20/thumbnail_IMAG21_30c77a8d-ada1-40f8-b87a-d02bb05e7e13.webp'
					/>
				</div>
				<div className='title bottom-0 right-2'>
					<h1 className='text-white text-center text-md font-bold drop-shadow-lg line-clamp-2 h-auto'>
						Operation: True Love {title}
					</h1>
					<div className='flex details justify-between pt-2'>
						<Image
							alt='MANHWA'
							loading='lazy'
							width={124}
							height={124}
							decoding='async'
							className='rounded-[3px] object-fill h-4 w-5'
							style={{ color: "transparent" }}
							src='/_next/static/media/manhwa.ee768e76.png'
						/>
						<div className='inline-block pl-2'>
							<svg
								focusable='false'
								viewBox='0 0 24 24'
								aria-hidden='true'
								className='h-auto w-4 fill-orange-400 inline-block'>
								<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'></path>
							</svg>
							<p className='inline-block'> 4.8 </p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default MangaCard;

//   return (
//     <div className="card">
//     <div className="wrapper h-full">
//       <img
//         alt="Cover of Necromancer Academy and the Genius Summoner"
//         draggable="false"
//         loading="lazy"
//         width="405"
//         height="595"
//         decoding="async"
//         className="cover-image object-cover object-center h-[260px] rounded-md"
//         style={{ color: 'transparent' }}
//         src="https://storage.vexmanga.com/public/upload/2024/04/16/resource (1).webp"
//       />
//     </div>
//     <div className="title bottom-0 right-2">
//       <h1 className="text-white text-center text-md font-bold drop-shadow-lg line-clamp-2 h-auto">
//         Necromancer Academy and the Genius Summoner
//       </h1>
//       <div className="flex details justify-between pt-2">
//         <img
//           alt="MANHWA"
//           loading="lazy"
//           width="124"
//           height="124"
//           decoding="async"
//           className="rounded-[3px] object-fill h-4 w-5"
//           style={{ color: 'transparent' }}
//           src="/_next/static/media/manhwa.ee768e76.png"
//         />
//         <div className="inline-block pl-2">
//           <svg
//             focusable="false"
//             viewBox="0 0 24 24"
//             aria-hidden="true"
//             className="h-auto w-4 fill-orange-400 inline-block"
//           >
//             <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//           </svg>
//           <p className="inline-block">4.8</p>
//         </div>
//       </div>
//     </div>

//     <div className="characterWrapper !w-[108%] top-[2px] h-full"></div>
//     <img
//       alt="characterHero"
//       loading="lazy"
//       width="405"
//       height="595"
//       decoding="async"
//       className="character z-[999999] h-auto"
//       style={{ color: 'transparent' }}
//       src="https://storage.vexmanga.com/public/upload/2024/04/16/banner 4.webp"
//     />
//   </div>

//   );
// };

// export default MangaCard;
