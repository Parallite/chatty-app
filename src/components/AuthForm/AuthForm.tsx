'use client'

import { useCallback, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

import axios from "axios"
import { FormFields, Variant } from "src/types"
import { Input } from "@/components/Inputs"
import { Button } from "@/components/Button"
import { AuthSocialButtons } from "@/components/AuthSocialButtons"
import { BsGithub } from 'react-icons/bs'
import { BsGoogle } from 'react-icons/bs'
import { signIn } from "next-auth/react"

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
    } = useForm<FormFields>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        setIsLoading(true);

        if (variant === "REGISTER") {
            console.log(data, 'register');
            axios.post('/api/register', data)
                .catch(() => toast.error("Ooops, something went wrong!"))
                .finally(() => setIsLoading(false))
        }

        if (variant === "LOGIN") {
            signIn("credentials", {
                ...data,
                redirect: false
            })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error('Invalid credentials')
                    }
                    if (callback?.ok && !callback?.error) {
                        toast.success('Logged in!')
                    }
                })
                .finally(() => setIsLoading(false))
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)
        signIn(action, {
            redirect: false
        })
            .then((callback) => {
                if (callback?.error) {
                    toast.error('Invalid credentials')
                }
                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in!')
                }
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md bg-white-primary rounded-3xl border-double border-4 border-blue-dark">
            <div className="px-4 py-8 sm:rounded-lg sm:px-10">
                <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-blue-dark">
                    {variant === "LOGIN" ? "Login" : "Sign up"}
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === "REGISTER" && (
                        <Input
                            id='name'
                            label="Name"
                            type="text"
                            icon="name"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        />
                    )}
                    <Input
                        id='email'
                        label="Email"
                        type="text"
                        icon="email"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input
                        id='password'
                        label="Password"
                        type="password"
                        icon="password"
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
                            <div className="w-full border-t border-blue-middle" />
                        </div>
                        <div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white-primary px-2 text-blue-dark">Or continue with</span>
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
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-blue-dark">
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
