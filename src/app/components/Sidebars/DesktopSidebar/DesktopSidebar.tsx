'use client'

import { useRoutes } from "@/app/hooks/useRoutes"
import { FC, useState } from "react"
import { DesktopItem } from "@/components/Sidebars/DesktopItem"
import { User } from "@prisma/client"
import { Avatar } from "@/components/Avatar"

interface DesktopSidebarProps {
    currentUser: User
}

export const DesktopSidebar:FC<DesktopSidebarProps> = ({currentUser}) => {
    const routes = useRoutes()
    const [isOpen, setIsOpen] = useState(false)
    console.log(currentUser);
    
    return (
        <div className="hidden bg-blue-dark border-blue-dark lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6
        lg:overflow-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
            <nav className="mt-4 flex flex-col justify-between">
                <h1 className="text-blue-dark">Logo</h1>
                <ul role="list" className="flex flex-col items-center space-y-1">
                    {routes.map((item) => (
                        <DesktopItem
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            active={item.active}
                            onClick={item.onClick}
                        />
                    ))}
                </ul>
            </nav>
            <nav className="mt-4 mb-4 flex flex-col justify-between items-center">
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer hover:opacity-75 transition"
                >
                    <Avatar user={currentUser}/>
                </div>
            </nav>
        </div>
    )
}