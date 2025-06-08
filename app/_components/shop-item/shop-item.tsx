import React from "react";
import Image from "next/image";
import { Item } from "@/app/_types/types";
import ShopItemsOverlay from "../shop-items-overlay/shop-items-overlay";

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
				<ShopItemsOverlay className="h-2 w-60 top-10 right-28">
					<div>View Item</div>
				</ShopItemsOverlay>
			</div>
			<div className='flex justify-between p-2 bg-white'>
				<div>{item.name}</div>
				<div>{item.price}</div>
				{/* <div className="capitalize bottom-0">add to cart</div> TODO */}
			</div>
		</div>
	);
};

export default ShopItem;