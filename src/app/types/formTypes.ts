import { FieldValues, UseFormRegister } from "react-hook-form"


export type Variant = 'LOGIN' | 'REGISTER'

export interface AuthFormFields extends FieldValues {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface LoginFormFields extends FieldValues {
    email: string,
    password: string,
}

export type FieldsId = "name" | "email" | "password" | "confirmPassword"

export type InputRegister =
    UseFormRegister<AuthFormFields> |
    UseFormRegister<LoginFormFields> |
    UseFormRegister<SettingsFormFields> |
    UseFormRegister<MessageFormFields> |
    UseFormRegister<GroupChatFields>

// Message

export interface MessageFormFields extends FieldValues {
    message: string,
}

// Settings

export interface SettingsFormFields extends FieldValues {
    name: string,
    image: string
}

// Group chat

export interface GroupChatFields extends FieldValues {
    name: '',
    members: []
}