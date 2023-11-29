'use client'

import clsx from "clsx"
import { FC } from "react"
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { FieldsId, FormFields } from "src/types"

import { BsFillPersonFill } from "react-icons/bs";
import { BsKeyFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";

type IconType = "password" | "email" | "name"

interface InputProps {
    label: string,
    id: FieldsId,
    type?: string,
    required?: boolean,
    register: UseFormRegister<FormFields>,
    errors: FieldErrors,
    icon?: IconType,
    disabled?: boolean
}

const icons = (icon: string) => {
    switch (icon) {
        case 'name': {
            return <BsFillPersonFill />;
        }
        case 'password': {
            return <BsKeyFill />;
        }
        case 'email': {
            return <BsEnvelopeFill />;
        }
        default: {
            return <></>;
        }
    }
};

export const Input: FC<InputProps> = ({
    label,
    id,
    type,
    icon,
    required,
    register,
    errors,
    disabled
}) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-blue-dark">
                {label}
            </label>
            <div className="mt-2 flex">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    className={clsx(`
                        form-input
                        block
                        w-full
                        rounded-md
                        border-0
                        py-1.5
                        text-blue-dark
                        shadow-sm
                        ring-1
                        ring-inset
                        ring-blue-middle
                        placeholder:text-blue-middle
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-blue-dark
                        sm:text-sm
                        sm:leading-6`,
                        errors[id] && "focus:ring-pink-dark",
                        disabled && "opacity-50 cursor-default",
                        icon && "rounded-s-md rounded-e-none"
                    )}
                />
                {
                    icon && <div className="inline-flex justify-center rounded-e-md bg-white-primary px-3 py-2 text-blue-dark
                    ring-1 ring-inset ring-blue-middle align-middle">{icons(icon) }</div> 
                }
            </div>
        </div>
    )
}
