import Image from "next/image";
import { getCollections } from "./_lib/data-service";
export default async function Home() {

	const collections= await getCollections();
	console.log(collections);
	return (
		<div className='grid justify-center grid-cols-3 grid-rows-[repeat(2,1fr)] gap-5 h-full'>
			<div className='relative border'>
				<Image fill className='object-cover' src='/hats.jpg' alt='' />
				<div className='absolute top-[40%] right-[35%] border bg-[#ffffff] p-5 w-[30%] h-[30%] flex flex-col justify-center items-center font-bold opacity-70'>
					<div>{collections.items[0]}</div>
					<div>SHOP NOW</div>
				</div>
			</div>
			<div className='relative border'>
				<Image fill className='object-cover' src='/jackets.webp' alt='' />
				<div className='absolute top-[40%] right-[35%] border bg-[#ffffff] p-5 w-[30%] h-[30%] flex flex-col justify-center items-center font-bold opacity-70'>
					<div>JACKETS</div>
					<div>SHOP NOW</div>
				</div>
			</div>
			<div className='relative border'>
				<Image fill className='object-cover' src='/sneakers.webp' alt='' />
				<div className='absolute top-[40%] right-[35%] border bg-[#ffffff] p-5 w-[30%] h-[30%] flex flex-col justify-center items-center font-bold opacity-70'>
					<div>SNEAKERS</div>
					<div>SHOP NOW</div>
				</div>
			</div>
			<div className='col-span-3 grid grid-cols-2 gap-x-5 w-full'>
				<div className='relative border'>
					<Image fill className='object-cover' src='/womens.jpg' alt='' />
					<div className='absolute top-[40%] right-[35%] border bg-[#ffffff] p-5 w-[30%] h-[30%] flex flex-col justify-center items-center font-bold opacity-70'>
					<div>WEMENS</div>
					<div>SHOP NOW</div>
				</div>
				</div>
				<div className='relative border'>
					<Image fill className='object-cover' src='/mens.webp' alt='' />
					<div className='absolute top-[40%] right-[35%] border bg-[#ffffff] p-5 w-[30%] h-[30%] flex flex-col justify-center items-center font-bold opacity-70'>
					<div>MENS</div>
					<div>SHOP NOW</div>
				</div>
				</div>
			</div>
		</div>
	);
}
