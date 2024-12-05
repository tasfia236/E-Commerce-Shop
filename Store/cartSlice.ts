import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
            const existingItems = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItems) {
                existingItems.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeItem: (state, action: PayloadAction<{ id: number }>) => {
            const existingItems = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItems) {
                if (existingItems.quantity > 1) {
                    existingItems.quantity -= 1;
                } else {
                    state.items = state.items.filter((item) => item.id != action.payload.id)
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },

})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer