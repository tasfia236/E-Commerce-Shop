import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='w-full h-[calc(100vh-12vh)] flex justify-center flex-col'>
            <div className='w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12'>
                {/* COntent */}
                <div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
                        mega  sale <span className='text-red-600'>Special</span> offer up to <span className='text-orange-500'>60%</span> off
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg text-black  text-opacity-70 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, similique modi, voluptatem delectus nam consequatur iusto nostrum quas a consequuntur animi in veritatis fugiat quis quisquam rerum, rem non omnis.
                    </p>
                    <div className="flex items-center mt-6 space-x-4">
                        <Button size={"lg"} className='bg-cyan-700'>Shop Now</Button>
                        <Button size={"lg"} className='bg-gray-800'>Explore More</Button>
                    </div>
                </div>
                {/* Image Content */}
                <div className='hidden lg:block'>
                    <Image src="/images/hero.png" alt='Hero' width={600} height={600} className='lg:h-[50%] lg:w-[50%] xl:h-[80%] xl:w-[80%]' />
                </div>
            </div>
        </div>
    )
}

export default Hero