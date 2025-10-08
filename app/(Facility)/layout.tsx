'use client'
import Links from '@/components/utils/links'
import ModeToggle from '@/components/utils/modeToggle'
import { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {

    return (
        <div>
            <nav className='flex justify-center items-center bg-transparent  w-fit mx-auto rounded-md px-16 mt-2  py-2 ' >
                <Links />
            </nav>
            <ModeToggle />
            {children}
        </div>
    )
}
