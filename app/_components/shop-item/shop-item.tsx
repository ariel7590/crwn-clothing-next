"use client";
import React from "react";
import Image from "next/image";
import { Item } from "@/app/_types/types";
import ShopItemsOverlay from "../shop-items-overlay/shop-items-overlay";
import { useShoppingCart } from "@/app/_providers/shopping-cart-provider";

interface ShopItemProps {
	item: Item;
}

const ShopItem = ({ item }: ShopItemProps) => {

	const shoppingCart=useShoppingCart();

	return (
		<div className='flex flex-col '>
			<div className='relative h-[400px] w-full group'>
				<Image
					src={item.image_url}
					fill
					alt={item.name}
					className='object-cover relative'
				/>
				<div className="bg-white opacity-20 absolute top-0 left-0 w-full h-full hidden group-hover:block" />
				<ShopItemsOverlay className="h-2 w-60 top-10 right-1/4 hidden group-hover:flex hover:bg-black hover:text-white hover:border-black cursor-pointer">
					<div>View Item</div>
				</ShopItemsOverlay>
				<ShopItemsOverlay className="h-2 w-60 top-72 right-1/4 hidden group-hover:flex hover:bg-black hover:text-white hover:border-black cursor-pointer" onClick={() => shoppingCart.increaseAmount()}>
					<div>add to cart</div>
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