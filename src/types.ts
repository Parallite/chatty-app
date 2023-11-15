
// AuthForm

export type Variant = 'LOGIN' | 'REGISTER'

export interface FormFields {
    name: string,
    email: string,
    password: string
}

export type FieldsId = "name" | "email" | "password"
