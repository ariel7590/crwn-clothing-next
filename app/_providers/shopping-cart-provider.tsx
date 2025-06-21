"use client"
// cart-context.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context
interface CartContextType {
	amount: number;
	increaseAmount: () => void;
	decreaseAmount: () => void;
}

// Create the context with default empty values
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [amount, setAmount] = useState<number>(0);

	const increaseAmount = () => {
		setAmount(amount + 1);
	};
	const decreaseAmount = () => {
		if (amount > 0) setAmount(amount - 1);
	};

	return (
		<CartContext.Provider value={{ amount, increaseAmount, decreaseAmount }}>
			{children}
		</CartContext.Provider>
	);
};

// Custom hook to use the context
export const useShoppingCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
