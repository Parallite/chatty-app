import { Variant } from "@/app/types"
import * as yup from "yup"

export const authFormSchema = (varian: Variant) => {
    if (varian === 'REGISTER') {
        return yup
            .object()
            .shape({
                name: yup.string()
                    .required("Name is a required field")
                    .min(3, 'Must be at least 3 characters long')
                    .max(15, 'Must not be more than 15 characters long')
                    .matches(/^[a-zA-Z]+$/,
                        "Must be a string without spaces"),
                email: yup.string()
                    .required("Email is a required field")
                    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        "Must be a valid email"),
                password: yup.string()
                    .required("Password is a required field")
                    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm,
                        'Password must be at least 6 characters long, 1 lowercase, 1 uppercase, 1 number and 1 special character.'),
                confirmPassword: yup.string()
                    .required('Confirm password is required')
                    .oneOf([yup.ref('password')], 'Passwords must match')
            })
    } else {
        return yup
            .object()
            .shape({
                email: yup.string()
                    .required("Email is a required field")
                    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        "Must be a valid email"),
                password: yup.string()
                    .required("Password is a required field")
                    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm,
                        'Password must be at least 6 characters long, 1 lowercase, 1 uppercase, 1 number and 1 special character.'),
            })
    }
}