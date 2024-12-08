'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, CartItem } from '../../../../../../Store/cartSlice'
import { Product } from '../../../../../../typing'
import { useToast } from '@/hooks/use-toast'

const AddToCart = ({product}:{product: Product}) => {
    const dispatch = useDispatch();
    const { toast } = useToast();

    const addCartHandler = (product: Product) => {
        toast({
            description: 'Item Added to Cart',
            variant: 'success',
        })
        dispatch(addItem(product))
    };


    return (
        <Button onClick={()=>{addCartHandler(product)}} className='mt-6'>
            Add To Cart
        </Button>
    )
}

export default AddToCart