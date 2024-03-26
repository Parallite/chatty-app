import * as yup from "yup"
import { Variant } from "@/app/types/formTypes"

export const authFormSchema = (varian: Variant) => {
    if (varian === 'REGISTER') {
        return yup
            .object()
            .shape({
                name: yup
                    .string()
                    .required("Name is a required field")
                    .min(3, 'Must be at least 3 characters long')
                    .max(15, 'Must not be more than 15 characters long')
                    .matches(/^[a-zA-ZА-Яа-я]+$/,
                        "Must be a string without spaces"),
                email: yup
                    .string()
                    .required("Email is a required field")
                    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        "Must be a valid email"),
                password: yup
                    .string()
                    .required("Password is a required field")
                    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm,
                        'Password must be at least 6 characters long, 1 lowercase, 1 uppercase, 1 number and 1 special character.'),
                confirmPassword: yup
                    .string()
                    .required('Confirm password is required')
                    .oneOf([yup.ref('password')], 'Passwords must match')
            })
    } else {
        return yup
            .object()
            .shape({
                email: yup
                    .string()
                    .required("Email is a required field")
                    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        "Must be a valid email"),
                password: yup
                    .string()
                    .required("Password is a required field")
                    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm,
                        'Password must be at least 6 characters long, 1 lowercase, 1 uppercase, 1 number and 1 special character.'),
            })
    }
};

export const settingsFormSchema = yup
    .object()
    .shape({
        name: yup
            .string()
            .required("Name is a required field")
            .min(3, 'Must be at least 3 characters long')
            .max(15, 'Must not be more than 15 characters long')
            .matches(/^[a-zA-ZА-Яа-я]+$/,
                "Must be a string without spaces"),
        image: yup
            .string()
            .default('')
    });

export const groupChatFormSchema = yup
    .object()
    .shape({
        name: yup
            .string()
            .required("Chat Name is a required field")
            .min(3, 'Must be at least 3 characters long')
            .max(15, 'Must not be more than 15 characters long')
            .matches(/^[a-zA-ZА-Яа-я]+$/,
                "Must be a string without spaces"),
        members: yup
            .array()
            .required('You must select 2 users')
            .min(2, "Please pick at least 2 users for chat")
            .of(
                yup.object().shape({
                    label: yup.string().required(),
                    value: yup.string().required()
                })
            )
    });