'use client'

import { User } from '@prisma/client'
import React, { FC } from 'react'
import { UserBox } from '@/app/users/components/UserBox'
import { BlobsSecondary } from '@/components/BlobsSecondary'
import { motion } from "framer-motion"

interface UserListProps {
    items: User[]
}

const itemVariants = {
    hidden: {
        opacity: 0
    },
    visible: (custom: number) => ({
        opacity: 1,
        transition: { duration: 0.1, delay: custom }
    })
}

export const UserList: FC<UserListProps> = ({ items }) => {
    return (
        <aside className='bg-white shadow-inner shadow-purple-middle lg:rounded-xl grow-0 lg:w-96 inset-y-0 pb-20 lg:pb-0 lg:ml-20 lg:block overflow-y-auto w-full'>
            <div className='px-2'>
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className='flex justify-between mb-4 px-2 py-4 mt-2 bg-orange-middle rounded-lg shadow-md shadow-orange-dark relative overflow-hidden'>
                    <div className='text-2xl font-bold text-white'>
                        People
                    </div>
                    <BlobsSecondary />
                </motion.div>
                <ul>
                    {items.map((item, index) => (
                        <motion.li
                            key={item.id}
                            variants={itemVariants}
                            initial='hidden'
                            animate="visible"
                            exit="hidden"
                            custom={(index + 10) * 0.1}
                        >
                            <UserBox data={item} />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}
