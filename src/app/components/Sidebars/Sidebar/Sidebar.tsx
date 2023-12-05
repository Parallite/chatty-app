import React, { FC, ReactNode } from 'react'
import { DesktopSidebar } from '@/components/Sidebars/DesktopSidebar'
import { MobileFooter } from '@/components/Sidebars/MobileFooter'
import { getCurrentUser } from '@/app/actions/getCurrentUser'

interface SidebarProps {
    children: ReactNode
}

export const Sidebar: FC<SidebarProps> = async ({children}) => {
    const currentUser = await getCurrentUser()
    return (
        <div className='h-full bg-neutral-50 rounded-3xl'>
            <DesktopSidebar currentUser={currentUser!}/>
            <MobileFooter />
            <main className='h-full relative rounded-3xl border-double border-4 border-blue-dark'>
                {children}
            </main>
        </div>
    )
}
