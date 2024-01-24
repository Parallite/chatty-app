import { Conversation, Message, User } from "@prisma/client";

// AuthForm

export type Variant = 'LOGIN' | 'REGISTER'

export interface FormFields {
    name: string,
    email: string,
    password: string
}

export type FieldsId = "name" | "email" | "password"

//Messages

export type FullMessageType = Message & {
    sender: User,
    seen: User[]
};

export type FullConversationType = Conversation & {
    users: User[];
    messages: FullMessageType[]
};