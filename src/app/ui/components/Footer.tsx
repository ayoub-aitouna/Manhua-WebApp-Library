import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className='rounded-lg shadow m-4 relative'>
			<div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
				<div className='flex w-full justify-center'>
					<Link
						className='relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity flex text-white items-center mb-4 space-x-3'
						href='/'
						tabIndex={0}
						role='link'>
						<Image
							src={"/assets/Image.png"}
							alt='footer logo'
							width={50}
							height={56}
							className='h-16'
						/>
						<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
							Vortex Scans
						</span>
					</Link>
				</div>
				<ul className='flex w-full justify-center flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
					<li>
						<Link
							className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity hover:underline me-4 text-white md:me-6'
							href='#'
							tabIndex={0}
							role='link'>
							About
						</Link>
					</li>
					<li>
						<Link
							className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity hover:underline me-4 text-white md:me-6'
							href='#'
							tabIndex={0}
							role='link'>
							Privacy Policy
						</Link>
					</li>
					<li>
						<Link
							className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity hover:underline me-4 text-white md:me-6'
							href='#'
							tabIndex={0}
							role='link'>
							DMCA
						</Link>
					</li>
					<li>
						<Link
							className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity hover:underline text-white'
							href='https://discord.com/invite/YsW2Vq5R7R'
							tabIndex={0}
							role='link'>
							Discord
						</Link>
					</li>
				</ul>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<span className='block text-sm text-gray-500 text-center dark:text-gray-400'>
					© 2024
					<Link
						className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity hover:underline ml-1 text-white'
						href='https://discord.com/invite/YsW2Vq5R7R'
						tabIndex={0}
						role='link'>
						Made by Iken
					</Link>
					.<br />
					All Rights Reserved.
					<br /> v0.8.03B
				</span>
			</div>
		</footer>
	);
};

export default Footer;
