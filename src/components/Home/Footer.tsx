import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='pt-20 pb-12'>
            <div className='w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                <div>
                    <h1 className="mb-4 text-[25px] text-black font-bold uppercase">
                        WShop
                    </h1>
                    <p className='text-sm opacity-80 text-black'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis excepturi voluptas iste? Illum debitis voluptatum quod soluta iusto omnis id non, asperiores quo nobis, provident atque ab eius nulla illo?
                    </p>
                    <p className="mt-6 text-base text-black opacity-80">
                        (+880)1234567890 - info@example.com
                    </p>
                </div>
                <div className='lg:mx-auto'>
                    <h1 className='footer_title'>Information</h1>
                    <p className="footer_link">About Us</p>
                    <p className="footer_link">Privacy Policy</p>
                    <p className="footer_link">Return Policy</p>
                    <p className="footer_link">Dropshipping</p>
                    <p className="footer_link">Shipping Policy</p>
                </div>
                <div className='lg:mx-auto'>
                    <h1 className='footer_title'>Account</h1>
                    <p className="footer_link">DashBoard</p>
                    <p className="footer_link">My Orders</p>
                    <p className="footer_link">Account Detalis</p>
                    <p className="footer_link">Track My Orders</p>
                </div>
                <div className='lg:mx-auto'>
                    <h1 className='footer_title'>Shop</h1>
                    <p className="footer_link">Affiliate</p>
                    <p className="footer_link">Best Sellers</p>
                    <p className="footer_link">Latest Products</p>
                    <p className="footer_link">Sale Products</p>
                </div>
            </div>
            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between w-4/5 mx-auto'>
                <p className="text-black text-sm opacity-60">© Copyright WebShop 2024</p>
                <Image src='/images/pay.png' width={230} height={230} alt='pay' className='object-contain ml-auto' />
            </div>
        </div>
    )
}

export default Footer