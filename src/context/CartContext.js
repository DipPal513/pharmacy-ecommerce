'use client'; // required for Next.js App Router

import { createContext, useContext, useState } from 'react';

// Create Context
const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add item to cart
    const addToCart = (product) => {
        setCartItems((prev) => {
            const itemExists = prev.find((item) => item.id === product.id);
            if (itemExists) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    };

    // Clear cart
    const clearCart = () => setCartItems([]);

    // Cart quantity and total
    const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );
    console.log(cartItems,cartTotal,cartQuantity
       )

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                cartQuantity,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart
export const useCart = () => useContext(CartContext);
