import clsx from "clsx"
import { FC, useState } from "react"
import { FieldErrors } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";

import { BsFillPersonFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FieldsId, InputRegister } from "@/app/types/formTypes";
import { motion } from "framer-motion";

type IconType = "password" | "email" | "name" | "confirmPassword" | "text";
type VisibleType = "password" | "text";

interface InputProps {
    label: string,
    id: FieldsId,
    type?: string,
    required?: boolean,
    register: InputRegister,
    errors: FieldErrors,
    icon?: IconType,
    disabled?: boolean,
    secondary?: boolean,
}

const icons = (icon: string) => {
    switch (icon) {
        case 'name': {
            return <BsFillPersonFill />;
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
    errors,
    disabled,
    secondary,
    register
}) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [typeField, setTypeField] = useState<VisibleType>('password');

    const togglePasswordVisiblity = () => {
        if (typeField === 'password') {
            setPasswordShown(true);
            setTypeField("text");
        } else {
            setPasswordShown(false);
            setTypeField("password");
        }
    };

    return (
        <div>
            <label htmlFor={id} className={clsx(`
                block 
                text-sm 
                font-medium 
                leading-6 
                text-purple-middle`,
                secondary && "text-green-light"
            )}>
                {label}
            </label>
            <div className="mt-2 flex">
                <input
                    id={id}
                    type={(
                        type !== 'password' ? type : typeField
                    )}
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
                        shadow-sm
                        ring-1
                        ring-inset
                        text-purple-dark
                        ring-purple-middle
                        placeholder:text-purple-middle
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-orange-middle
                        sm:text-sm
                        sm:leading-6`,
                        errors[id] && "focus:ring-red",
                        disabled && "opacity-50 cursor-default",
                        icon && "rounded-s-md rounded-e-none",
                        secondary && " text-green-light, ring-green-light placeholder:text-green-light"
                    )}
                />
                {
                    icon && icon !== "password" ? (
                        <div className="inline-flex justify-center rounded-e-md bg-white px-3 py-2 text-purple-middle
                        ring-1 ring-inset ring-purple-middle align-middle">{icons(icon)}</div>
                    ) :
                        <button type="button" onClick={togglePasswordVisiblity} className="inline-flex justify-center rounded-e-md bg-white px-3 py-2 text-purple-middle
                    ring-1 ring-inset ring-purple-middle align-middle">
                            {
                                passwordShown ? <FaEye /> : <FaEyeSlash />
                            }
                        </button>
                }
            </div>
                <ErrorMessage
                    errors={errors}
                    name={id}
                    render={({ message }) => (
                        <motion.p
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="bg-green-light text-red rounded-md border-red border-2 p-2 sm:text-xs my-1">{message}</motion.p>
                    )}
                />
        </div>
    )
}
