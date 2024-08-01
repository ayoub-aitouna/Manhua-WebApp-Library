import React from "react";
import Image from "next/image";
const LargePost = () => {
	return (
		<div
			className='relative h-80 w-1/3 min-w-40 max-w-[600px] rounded-xl overflow-hidden shadow-lg'
			title='Juvenile Law'>
			<Image
				src='/assets/Juvenile-Law29.webp'
				alt='placeholder'
				loading='lazy'
				className='object-cover w-full h-full'
				width={600}
				height={380}
			/>
			<div className='w-full h-full absolute top-[100px]  left-0 bg-gradient-to-b from-transparent  via-gradient-to-transparent to-black z-10'></div>
			<div className='absolute z-20 px-2.5 py-2.5 left-2.5 bottom-5 flex flex-col '>
				<div
					className='w-max rounded-full px-2 leading-6 flex items-center gap-1 bg-gradient-to-b text-[10px] md:text-sm font-bold text-gray-900'
					style={{
						background: "rgba(255, 0, 68, 0.1)",
						border: "1px solid rgba(255, 0, 68, 0.2)",
					}}>
					🔥 Hot
				</div>
				<div className='w-full p-2 text-center [text-shadow:_4px_1px_4px_black]'>
					<div className='text'>
						<h2 className='font-bold text-left text-3xl capitalize line-clamp-2'>
							Juvenile Law
						</h2>
					</div>
					<div className='flex flex-wrap gap-2'>
						<div
							className='rounded-full px-2 leading-6 flex-center gap-1 bg-gradient-to-b border text-xs'
							style={{
								background: "rgba(255, 0, 68, 0.1)",
								border: "1px solid rgba(255, 0, 68, 0.2)",
							}}>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 24 24'
								className='w-1 h-1 rounded-full bg-gray-500'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z'></path>
							</svg>
							<span className='leading-6 font-light'>Action</span>
						</div>
						<div
							className='rounded-full px-2 leading-6 flex-center gap-1 bg-gradient-to-b border text-xs'
							style={{
								background: "rgba(255, 0, 68, 0.1)",
								border: "1px solid rgba(255, 0, 68, 0.2)",
							}}>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 24 24'
								className='w-1 h-1 rounded-full bg-gray-500'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z'></path>
							</svg>
							<span className='leading-6 font-light'>Adventure</span>
						</div>
						<div
							className='rounded-full px-2 leading-6 flex-center gap-1 bg-gradient-to-b border text-xs'
							style={{
								background: "rgba(255, 0, 68, 0.1)",
								border: "1px solid rgba(255, 0, 68, 0.2)",
							}}>
							<svg
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 24 24'
								className='w-1 h-1 rounded-full bg-gray-500'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z'></path>
							</svg>
							<span className='leading-6 font-light'>School Life</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LargePost;
