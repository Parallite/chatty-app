import { User } from '@prisma/client'
import React, { FC } from 'react'
import { UserBox } from '@/components/UserBox'

interface UserListProps {
    items: User[]
}

export const UserList: FC<UserListProps> = ({ items }) => {
    return (
        <aside className='absolute inset-y-0 pb-20 lg:pb-0 lg:left-10 lg:w-80 lg:block overflow-y-auto border-r
        border-blue-middle block w-full left-0'>
            <div className='px-5'>
                <div className='flex-col'>
                    <div className='text-2xl font-bold text-blue-dark py-4'>
                        All people
                    </div>
                </div>
                <div>
                { items.map((item) => (
                    <UserBox data={item} key={item.id} />
                ))}
                </div>
            </div>
        </aside>
    )
}
