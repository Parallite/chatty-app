'use client'

import { useConversation } from '@/app/hooks/useConversation';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { ConversationBox } from '@/app/conversations/components/ConversationBox';
import { FullConversationType } from '@/app/types/messagesTypes';
import { LuUserPlus2 } from "react-icons/lu";
import { BlobsSecondary } from '@/components/BlobsSecondary';
import { GroupChatModal } from '@/app/conversations/[conversationId]/components/GroupChatModal';
import { User } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { pusherClient } from '@/app/libs/pusher/client';
import { motion } from 'framer-motion'
import find from 'lodash/find';


interface ConversationListProps {
    initialItems: FullConversationType[];
    users: User[]
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

export const ConversationList: FC<ConversationListProps> = ({
    initialItems,
    users
}) => {
    const session = useSession();
    const [items, setItems] = useState(initialItems);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const router = useRouter();
    const { conversationId, isOpen } = useConversation();

    const pusherKey = useMemo(() => {
        return session.data?.user?.email
    }, [session.data?.user?.email]);

    useEffect(() => {
        if (!pusherKey) {
            return
        }

        pusherClient.subscribe(pusherKey);

        const newConversationHandler = (conversation: FullConversationType) => {
            setItems((current) => {
                if (find(current, { id: conversationId })) {
                    return current
                }

                return [conversation, ...current]
            })
        };

        const updateListHandler = (conversation: FullConversationType) => {
            setItems((current) => current.map((currentConversation) => {
                if (currentConversation.id === conversation.id) {
                    return {
                        ...currentConversation,
                        messages: conversation.messages
                    }
                }

                return currentConversation
            }));
        };

        const removeConversationHandler = (conversation: FullConversationType) => {
            setItems((current) => {
                return [...current.filter((conv) => conv.id !== conversation.id)]
            })

            if (conversationId === conversation.id) {
                router.push('/conversations');
            }
        }

        //add a new conversation in real-time in ConversationList
        pusherClient.bind('conversation:new', newConversationHandler);

        //update a new message in real-time in ConversationList
        pusherClient.bind('conversation:update', updateListHandler);

        // remove a conversation in real-time from ConversationList
        pusherClient.bind('conversation:remove', removeConversationHandler);

        return () => {
            pusherClient.unsubscribe(pusherKey);
            pusherClient.unbind('conversation:new', newConversationHandler);
            pusherClient.unbind('conversation:update', updateListHandler);
            pusherClient.unbind('conversation:remove', removeConversationHandler);
        }
    }, [pusherKey, conversationId, router])

    return (
        <>
            <GroupChatModal
                users={users}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <aside
                className={clsx(`bg-white shadow-inner shadow-purple-middle lg:rounded-xl lg:block overflow-y-auto block left-0 lg:w-96 inset-y-0 grow-0
                pb-20 lg:pb-0 lg:ml-20 lg:left-10
            `,
                    isOpen ? 'hidden' : 'block w-full left-0'
                )}
            >
                <div className='px-2'>
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        className='flex justify-between mb-4 px-2 py-4 mt-2 bg-orange-middle rounded-lg shadow-md shadow-orange-dark relative overflow-hidden'>
                        <div>
                            <div className='text-2xl font-bold text-white'>
                                Messages
                            </div>
                            <BlobsSecondary />
                        </div>
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className='rounded-[70%30%69%31%/43%28%72%57%] p-2 bg-blue-dark cursor-pointer text-white hover:scale-110 outline-2 outline transition'>
                            <LuUserPlus2 size={20} />
                        </div>
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
                                <ConversationBox
                                    key={item.id}
                                    data={item}
                                    selected={conversationId === item.id}
                                />
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    )
}
