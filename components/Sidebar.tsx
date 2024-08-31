'use client';

import React from 'react'
import { sidebarLinks } from '@/constants/index'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const Sidebar = () => {
    const pathname = usePathname();
  return (
    <div className='sticky left-0 top-0 w-fit pt-20 flex h-screen flex-col justify-between bg-white'>
        <div className='bg-white flex flex-col gap-6  '>
            {sidebarLinks.map((link, index) => {
                const isActive = pathname === link.route || pathname.startsWith(link.route) && link.route !== '/';
                    return (
                            <div key={index} className='bg-white-50 px-2 '>
                                <Link className={`flex ${isActive ? 'bg-dark-1 ' : ""} py-4 gap-2 px-8 rounded-md`} href={link.route}>
                                    <Image className='text-black' src={link.imgUrl} alt={link.label} width={24} height={24} />
                                    {link.label}</Link>
                            </div>
                       )
            })}
        </div>
    </div>
  )
}

export default Sidebar
