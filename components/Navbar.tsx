import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, UserButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <nav className='flex bg-white fixed justify-between z-50 w-full'>
      <Link href="/">
      <Image className='ml-4' src='/jwmeet.png' alt='logo' width={130} height={50} />
      </Link>
      <div className=' flex pr-3 justify-center'>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
