"use client";

import React, { useEffect, useState } from 'react'
import { getAllProduct } from '../../../Request/requests';
import { Product } from '../../../typing';
import { Loader } from 'lucide-react';
import ProductCard from './ProductCard';

const AllProduct = () => {
    const [products, setProduct] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState(true);

    console.log(products);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const products: Product[] = await getAllProduct();
                setProduct(products);
                
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <div className='pt-16 pb-12'>
            <h1 className='text-2xl text-center font-bold'>
                All Products
            </h1>
            {loading ? (
                <div className='flex items-center justify-center mt-4'>
                    <Loader size={32} className='animate-spin' />
                </div>
            ) : (
                <div className='w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {products?.map((product)  => {
                        return <ProductCard key={product.id} product={product} />;
                    })}
                </div>
            )}
        </div>
    )
}

export default AllProduct