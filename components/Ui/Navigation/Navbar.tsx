'use client'
import React from 'react'
import { Button } from "@/components/Ui/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const NAV_LINK = [
  { id: '1', name: 'home', link: '/' },
  { id: '2', name: 'product', link: '/product' },
  { id: '3', name: 'support', link: '/support' },
  { id: '4', name: 'contact us', link: '/contact-us' },
]

export default function Navbar() {
  const currentLink = usePathname()
  return (
    <nav className="flex justify-between items-center">
      <Image src="/images/logo.svg" alt="nowted-logos" width={96} height={24} />
      <ul className="flex gap-8">
        {NAV_LINK.map((item) => {
          return <li key={item.id}>
            <Link href={item.link} className={`${currentLink == item.link ? 'text-white' : 'text-slate-600'}`}>
              {item.name}
            </Link>
          </li>
        })}
      </ul>
      <Button variant={"ghost"}>
        Login
      </Button>
    </nav>
  )
}
