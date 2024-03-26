'use client'

import Link from "next/link"
import clsx from "clsx"
import { FC } from "react";

interface MobileItemsProps {
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}

export const MobileItem: FC<MobileItemsProps> = ({
    href,
    icon: Icon,
    active,
    onClick
}) => {
    const handleClick = () => {
        if(onClick) return onClick
    }

    return (
        <Link 
            onClick={onClick}
            href={href}
            scroll={false}
            className={clsx(`
                group
                flex
                m-2
                gap-x-4
                rounded-md
                text-sm
                leading-6
                font-semibold
                w-full
                justify-center
                p-4
                text-white
                shadow-2xl
                hover:bg-white
                hover:text-purple-middle
                ransition-all
                duration-500
            `,
                active && 'bg-orange-middle text-purple-middle'
            )}
        >
            <Icon className="h-6 w-6"/>
        </Link>
    )
}
