'use client'

import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

import { Variant } from "src/constants"
import { Input } from "@/components/Inputs"
import { Button } from "@/components/Button"
import { AuthSocialButtons } from "@/components/AuthSocialButtons"
import { BsGithub } from 'react-icons/bs'
import { BsGoogle } from 'react-icons/bs'

export const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant("REGISTER")
        } else {
            setVariant('LOGIN')
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        if (variant === "REGISTER") {
            //Axios Register
        }

        if (variant === "LOGIN") {
            //NextAuth SignIn
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)
        // NextAuth social sign in
    }

    return (
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
                    {variant === "LOGIN" ? "Login" : "Sign up"}
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === "REGISTER" && (
                        <Input
                            id='name'
                            label="Name"
                            type="text"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        />
                    )}
                    <Input
                        id='email'
                        label="Email"
                        type="text"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input
                        id='password'
                        label="Password"
                        type="password"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit"
                        >
                            {variant === "LOGIN" ? 'Log in' : "Sign up"}
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500">Or continue with</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <AuthSocialButtons 
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButtons
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                    </div>
                </div>
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                    <div>
                        {variant === "LOGIN" ? "Dont have account?" : 'Already have an account?'}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className="underline cursor-pointer"
                    >
                        {variant === "LOGIN" ? "Create now" : "Login"}
                    </div>
                </div>
            </div>
        </div>
    )
}
