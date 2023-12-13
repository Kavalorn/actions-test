"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Houses', href: '/houses' },
    { name: 'projecting', href: '/projecting' },
    { name: 'contacts', href: '/contacts' },
]

const Navbar = () => {
    const pathname = usePathname()

  return (
    <header className="bg-slate-400 flex items-center justify-between p-4">
        <div className='text-3xl font-bold'>Logo<span className="text-red-500">Sanity</span></div>
        <ul className="flex space-x-8">
            {links.map((link) => (
                <li key={link.name} className={`${pathname === link.href ? 'font-bold' : ''} transition duration-200 hover:text-primary`}>
                    <Link href={link.href}>{link.name}</Link>
                </li>
            ))}
        </ul>
    </header>
  )
}

export default Navbar