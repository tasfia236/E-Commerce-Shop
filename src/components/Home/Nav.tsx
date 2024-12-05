import Link from 'next/link'
import React from 'react'
import SearchBox from '../Helper/SearchBox'
import { HeartIcon, UserIcon } from 'lucide-react'
import SoppingCartButton from '../Helper/SoppingCartButton'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs'

const Nav = () => {
    return (
        <div className='h-[12vh] sticky top-0 z-[1] bg-white shadow-md'>
            <div className='flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full'>
                {/* Logo */}
                <Link href="/" className='text-3xl font-bold text-purple-800'>
                    WShop
                </Link>
                {/* Icons */}
                <div className='flex items-center space-x-6'>
                    <SearchBox></SearchBox>
                    <HeartIcon size={26} cursor={"pointer"}></HeartIcon>
                    <SoppingCartButton></SoppingCartButton>

                    {/* User Authantication */}
                    <SignedIn>
                        <UserButton></UserButton>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <UserIcon size={26} cursor={"pointer"}></UserIcon>
                        </SignInButton>
                    </SignedOut>

                </div>
            </div>
        </div>
    )
}

export default Nav