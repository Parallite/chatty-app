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
            className={clsx(`
                group
                flex
                gap-x-3
                text-sm
                leading-6
                font-semibold
                w-full
                justify-center
                p-4
                text-white-primary
                hover:bg-white-primary
                hover:text-blue-dark
            `,
                active && "bg-blue-middle text-blue-dark w-full"
            )}
        >
            <Icon className="h-6 w-6"/>
        </Link>
    )
}
