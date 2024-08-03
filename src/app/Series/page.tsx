import ManhuaCard from "@/ui/components/ManhuaCard";
import React from "react";

const page = () => {
	return (
		<section className='flex container flex-col gap-20 mt-10  mx-auto px-10 min-h-dvh'>
			<div className='flex fex-row flex-wrap gap-6'>
				{Array(20)
					.fill(0)
					.map((_, index) => (
						<ManhuaCard key={index} />
					))}
			</div>
		</section>
	);
};

export default page;
