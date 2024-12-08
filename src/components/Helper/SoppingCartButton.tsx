"use client"
import { ShoppingCartIcon } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Store/store'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import CardSidebar from './CardSidebar'

const SoppingCartButton = () => {

  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger>
        <div className='relative'>
          <span className='absolute -top-3 -right-2 bg-red-400 h-6 w-6 text-center flex items-center justify-center flex-col text-xs text-white rounded-full'>
            {totalQuantity}
          </span>
          <ShoppingCartIcon size={26} cursor={"pointer"}></ShoppingCartIcon>
        </div>
      </SheetTrigger>
      <SheetContent className='h-full overflow-auto'>
        <CardSidebar items={items} />
      </SheetContent>
    </Sheet>
  )
}

export default SoppingCartButton