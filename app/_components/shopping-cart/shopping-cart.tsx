"use client";

import React from "react";
import Image from "next/image";
import cart from "@/public/cart-icon.svg";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../button/button";
import { useShoppingCart } from "@/app/_providers/shopping-cart-provider";

const ShoppingCart = () => {

    const ShoppingCart=useShoppingCart();

	return (
		<Popover>
			<PopoverTrigger>
				<div className='relative cursor-pointer'>
					<Image
						src={cart}
						width={30}
						height={30}
						alt='shopping cart'
						className='mb-2'
					/>
					<span className='absolute top-2 right-3 text-md'>{ShoppingCart.amount}</span>
				</div>
			</PopoverTrigger>
			<PopoverContent className="rounded-none h-72 w-60 bg-white">
				<div className="h-72/85 flex justify-center items-center text-lg">
                    Your cart is empty
                </div>
                <div className="w-full flex justify-center">
                    <Button size='lg' className="uppercase bg-black text-white rounded-none">go to checkout</Button>
                </div>
			</PopoverContent>
		</Popover>
	);
};

export default ShoppingCart;
