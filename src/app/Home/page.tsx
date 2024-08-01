import LargePost from "@/ui/components/LargePost";
import React from "react";

const page = () => {
	return (
		<div className='flex   mt-20 container mx-auto px-10'>
			<div className='flex flex-row gap-4 w-full'>
				<LargePost />
				<LargePost />
				<LargePost />
			</div>
		</div>
	);
};

export default page;
