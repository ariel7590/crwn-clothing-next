import React from "react";
import Image from "next/image";
import { Item } from "@/app/_types/types";

interface ShopItemProps {
	item: Item;
}

const ShopItem = ({ item }: ShopItemProps) => {
	return (
		<div className='flex flex-col '>
			<div className='relative h-[400px] w-full'>
				<Image
					src={item.image_url}
					fill
					alt={item.name}
					className='object-cover hover:brightness-200 relative'
				/>
				<div className='bg-white opacity-70 hidden hover:block absolute top-0 left-0 w-full h-full z-10'>
					<div>View Item</div>
				</div>
			</div>
			<div className='flex justify-between p-2 bg-white'>
				<div>{item.name}</div>
				<div>{item.price}</div>
			</div>
		</div>
	);
};

export default ShopItem;