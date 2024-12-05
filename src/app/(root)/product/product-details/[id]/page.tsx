import React from 'react'
import { Product } from '../../../../../../typing';
import { getProductByCategory, getSingleProduct } from '../../../../../../Request/requests';
import Image from 'next/image';
import { StarIcon } from 'lucide-react';

const ProductDetalis = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const singleProduct: Product = await getSingleProduct(id);
  const relatedProduct: Product = await getProductByCategory(singleProduct.category);
  console.log(relatedProduct);

  const num = Math.round(singleProduct?.rating?.rate); //4.3-> 4
  const starArray = new Array(num).fill(0); // 4 -> [0, 0, 0, 0]

  return (
    <div className='mt-20'>
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        <div className="mb-6 lg:mb-0 col-span-3">
          <Image src={singleProduct.image} alt={singleProduct.title} width={400} height={400} />
        </div>
        <div className="col-span-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-black">
            {singleProduct.title}
          </h1>
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center">
              {starArray.map((star) => {
                return <StarIcon key={Math.random() * 5000} size={20} fill='yellow' className='text-yellow-500' />
              })}
            </div>
            <p className="text-base text-gray-700 font-semibold">
              ({singleProduct?.rating?.count} Reviews)
            </p>
          </div>
          <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-blue-950 font-bold">${singleProduct?.price.toFixed(2)}</h1>
        </div>
        <p className="mt-4 text-black text-base opacity-70">
          {singleProduct.description}
        </p>
      </div>
    </div>
  )
}

export default ProductDetalis