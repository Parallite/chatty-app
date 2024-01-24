'use client'

import { useConversation } from '@/app/hooks/useConversation';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { MdOutlineGroupAdd } from 'react-icons/md'
import React, { FC, useState } from 'react'
import { ConversationBox } from '@/components/ConversationBox';
import { FullConversationType } from '@/app/types';

interface ConversationListProps {
    initialItems: FullConversationType[];
}

export const ConversationList: FC<ConversationListProps> = ({
    initialItems
}) => {
    const [items, setItems] = useState(initialItems);
    const router = useRouter();
    const { conversationId, isOpen } = useConversation();

    return (
        <aside
            className={clsx(`absolute inset-y-0 pb-20 lg:pb-0 lg:left-10 lg:w-80 lg:block overflow-y-auto border-r
            border-blue-middle block w-full left-0
            `,
                isOpen ? 'hidden' : 'block w-full left-0'
            )}
        >
            <div className='px-5'>
                <div className='flex justify-between mb-4 pt-4'>
                    <div className='text-2xl font-bold text-bg-primary'>
                        All messages
                    </div>
                    <div className='flex items-center p-1 rounded-full bg-gray-100 text-bg-primary cursor-pointer hover:text-blue-middle transition'>
                        <MdOutlineGroupAdd size={20} />
                    </div>
                </div>
                { items.map((item) => (
                    <ConversationBox 
                        key={item.id}
                        data={item}
                        selected={conversationId === item.id}
                    />
                ))}
            </div>
        </aside>
    )
}
