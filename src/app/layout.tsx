import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App12345123',
  description: 'Generated by create next app123',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <ul className="flex space-x-8">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/about-us'}>About Us</Link></li>
            <li><Link href={'/services'}>Services</Link></li>
            <li><Link href={'/houses'}>Houses</Link></li>
            <li><Link href={'/projecting'}>projecting</Link></li>
            <li><Link href={'/contacts'}>contacts</Link></li>
          </ul>
        </div>
        {children}
      <footer>
      <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <ul className="flex space-x-8">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/about-us'}>About Us</Link></li>
            <li><Link href={'/services'}>Services</Link></li>
            <li><Link href={'/houses'}>Houses</Link></li>
            <li><Link href={'/projecting'}>projecting</Link></li>
            <li><Link href={'/contacts'}>contacts</Link></li>
          </ul>
        </div>
      </footer>
      </body>
    </html>
  )
}
