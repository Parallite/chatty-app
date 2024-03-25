'use client'

import clsx from "clsx"
import { FC, ReactNode } from "react"
import { BlobFirst } from "../Blobs/BlobFirst"
import { BlobSecond } from "../Blobs/BlobSecond"
import { BlobThird } from "../Blobs/BlobThird"

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined,
    fullWidth?: boolean,
    children?: ReactNode,
    onClick?: () => void,
    secondary?: boolean,
    danger?: boolean,
    disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(`
                flex
                min-w-[100px]
                justify-center
                rounded-md
                px-3
                py-2
                text-sm
                font-semibold
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                text-white
                relative
                overflow-hidden
                group
            `,
                disabled && "opacity-50 cursor-default",
                fullWidth && "w-full",
                secondary ? "bg-purple-middle hover:bg-orange-middle" : "text-white",
                danger && "bg-red hover:bg-orange-middle focus-visible:outline-orange-middle",
                !secondary && !danger && "bg-purple-middle hover:ring-white hover:bg-orange-middle hover:border-blue-dark hover:shadow-blue-light focus-visible:outline-bg-blue-middle transition-colors"
            )}
        >
            <span className="relative z-10 w-full">
                {children}
            </span>
            {
                !secondary && !danger && (
                    <>
                        <BlobFirst fill={"#D4A5B1"} className={"absolute w-20 h-20 top-0 left-0 rotate-90 group-hover:rotate-180 transition-transform"} />
                        <BlobSecond fill={"#C2E8E4"} className={"absolute w-10 h-10 -top-4 right-0 rotate-45 group-hover:rotate-0 transition-transform"} />
                        <BlobThird fill={"#72CEC1"} className={"absolute w-10 h-10 -bottom-4 right-20 rotate-45 group-hover:rotate-0 transition-transform"} />
                    </>
                )
            }
                        {
                secondary && (
                    <>
                        <BlobFirst fill={"#B6E5F3"} className={"absolute w-[20%] -top-3 left-0 rotate-90 group-hover:rotate-180 transition-transform"} />
                        <BlobThird fill={"#E94C89"} className={"absolute w-[20%] -bottom-3 right-0 rotate-45 group-hover:rotate-0 transition-transform"} />
                    </>
                )
            }
        </button>
    )
}
