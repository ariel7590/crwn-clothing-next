import React from "react";

const NoItemsFallback = () => {
	return (
		<div className='flex flex-col items-center justify-center h-96 w-full col-span-4 bg-white rounded-lg'>
			<svg
				className='w-16 h-16 mb-4 text-black'
				fill='none'
				stroke='currentColor'
				strokeWidth={1.5}
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M3 3v1a2 2 0 002 2h14a2 2 0 002-2V3M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7'
				/>
				<circle cx='12' cy='13' r='3' stroke='currentColor' strokeWidth='1.5' />
			</svg>
			<span className='text-3xl font-semibold text-black mb-2'>
				No items found
			</span>
			<span className='text-lg text-gray-400'>
				Please check back later or explore other collections.
			</span>
		</div>
	);
};

export default NoItemsFallback;
