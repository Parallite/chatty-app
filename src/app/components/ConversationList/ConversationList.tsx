'use client'

import { useConversation } from '@/app/hooks/useConversation';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react'
import { ConversationBox } from '@/components/ConversationBox';
import { FullConversationType } from '@/app/types';
import { LuUserPlus2 } from "react-icons/lu";
import { BlobsSecondary } from '@/components/BlobsSecondary';

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
            className={clsx(`bg-white shadow-inner shadow-purple-middle lg:rounded-xl lg:w-96 inset-y-0 pb-20 lg:pb-0 lg:ml-20 lg:left-10 lg:block overflow-y-auto 
        block w-full left-0
            `,
                isOpen ? 'hidden' : 'block w-full left-0'
            )}
        >
            <div className='px-2'>
                <div className='flex justify-between mb-4 px-2 py-4 mt-2 bg-orange-middle rounded-lg shadow-md shadow-orange-dark relative overflow-hidden'>
                    <div>
                    <div className='text-2xl font-bold text-white'>
                        Messages
                    </div>
                    <BlobsSecondary />
                    </div>
                    <div className='flex items-center justify-center p-1 w-8 h-8 rounded-full text-white cursor-pointer hover:text-white hover:bg-purple-middle hover:shadow-md hover:shadow-purple-middle transition'>
                        <LuUserPlus2 size={20} />
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
