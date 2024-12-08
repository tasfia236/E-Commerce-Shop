import React from 'react'
import { addItem, CartItem, removeItem } from '../../../Store/cartSlice';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

type Props = {
    items: CartItem[];
}
const CardSidebar = ({ items }: Props) => {
    const dispatch = useDispatch();

    const addCartHandler = (item: CartItem) => dispatch(addItem(item));
    const removeCartHandler = (id: number) => dispatch(removeItem({ id }));

    return (
        <div className='mt-6 h-full'>
            <h1 className="mb-4 text-center text-lg font-bold">Your Cart</h1>
            {items.length == 0 && (
                <div className='w-full h-[80vh]'>
                    <h1 className="mt-8 text-2xl font-semibold">Your Cart is Empty!</h1>
                </div>
            )}
            {items.length > 0 && (
                <div className='w-full h-[80vh]'>
                    {items.map((item) => {
                        return <div key={item.id} className='pb-4 border-b-2 border-gray-300 border-opacity-60'>
                            <div>
                                <Image src={item.image} alt={item.title} width={60} height={60} className='mb-4 object-cover' />
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
                    })}
                    <div className='mt-2'>
                        <Link href={'/cart'}>
                            <Button size={'lg'}> View All Cart</Button>
                        </Link>
                    </div>
                </div>

            )}

        </div >
    )
}

export default CardSidebar