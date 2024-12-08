'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../Store/store'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { addItem, CartItem, removeItem } from '../../../../Store/cartSlice';
import { useUser } from '@clerk/nextjs';

const Cart = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch()

    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    const vat = (+totalPrice * 0.15).toFixed(2);
    const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);
    console.log(totalQuantity, totalPrice, vat, totalPriceWithVat)

    const addCartHandler = (item: CartItem) => dispatch(addItem(item));
    const removeCartHandler = (id: number) => dispatch(removeItem({ id }));

    const { user } = useUser();

    return (
        <div className='mt-8 min-h-[60vh]'>
            {/* Check if the is empty */}
            {items.length == 0 && (
                <div className='flex flex-col gap-8 items-center justify-center w-full h-[80vh]'>
                    <h1 className="mt-8 text-2xl font-semiboldtext-black">Your Cart is Empty!</h1>
                    <Link href={'/'}>
                        <Button size={'lg'}>Shop Now!</Button>
                    </Link>
                </div>
            )}
            {items.length > 0 && (
                <div className='md:w-4/5 w-[95%] mx-auto h-[80vh] grid grid-cols-1 xl:grid-cols-6 gap-12'>
                    <div className='rounded-lg shadow-md overflow-auto xl:col-span-4'>
                        <h1 className="p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-purple-900">Your Cart ({totalQuantity} items)</h1>
                        {items.map((item) => {
                            return <div key={item.id}>
                                <div className='mt-2 flex pb-6 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center space-x-10'>
                                    <div>
                                        <Image src={item.image} alt={item.title} width={120} height={120} className='mb-4 object-cover' />
                                    </div>
                                    <div>
                                        <h1 className="w-4/5 text-sm font-semibold truncate">{item?.title}</h1>
                                        <h1 className="text-base font-bold text-blue-950">${(item?.price * item?.quantity).toFixed(2)}</h1>
                                        <h1 className="mb-2 text-base font-bold">Quantity: {item?.quantity}</h1>
                                        <div className="flex items-center space-x-4">
                                            <Button onClick={() => { removeCartHandler(item.id) }} size={"sm"} variant={'destructive'}>
                                                Remove
                                            </Button>
                                            <Button onClick={() => { addCartHandler(item) }} size={"sm"}>
                                                Add
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className='xl:col-span-2'>
                        <div className='bg-indigo-800 sticky rounded-lg p-6 top-[25vh]'>
                            <h1 className="my-8 text-white text-center text-2xl font-semibold">Summary</h1>
                            <div className='w-full h-[1.2px] bg-white bg-opacity-20'></div>
                            <div className='flex items-center justify-between mt-4 uppercase font-semibold text-white'>
                                <span>SubTotal</span>
                                <span>${totalPrice}</span>
                            </div>
                            <div className='flex items-center justify-between mt-10 mb-10 uppercase font-semibold text-white'>
                                <span>VAT</span>
                                <span>${vat}</span>
                            </div>
                            <div className='flex items-center justify-between mb-6 uppercase font-semibold text-white'>
                                <span>Shipping</span>
                                <span>FREE</span>
                            </div>
                            <div className='w-full h-[1.2px] bg-white bg-opacity-20'></div>
                            <div className='flex items-center justify-between mb-6 mt-6 uppercase font-semibold text-white'>
                                <span>Total</span>
                                <span>{totalPriceWithVat}</span>
                            </div>
                            {!user && (
                                <Link href={'/sign-in'}>
                                    <Button className='w-full bg-orange-500'>
                                        Sign In to CheckOut
                                    </Button>
                                </Link>
                            )}
                            {user && (
                                <Button className='w-full bg-orange-500'>PayPal</Button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart