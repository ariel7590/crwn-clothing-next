import React from "react";

interface ShopItemsOverlayProps {
    children: React.ReactNode;
    className?: string;
	onClick?: ()=>void;
}

const ShopItemsOverlay = ({children, className, onClick}: ShopItemsOverlayProps) => {
	return (
		<div className={`uppercase text-nowrap absolute top-2/5 right-7\/20 border bg-[#ffffff] p-5 w-1/3 h-1/3 flex flex-col justify-center items-center font-bold opacity-70 ${className}`} onClick={onClick}>
			{children}
		</div>
	);
};

export default ShopItemsOverlay;
