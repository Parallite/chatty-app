import React, { FC, useCallback, useMemo } from 'react'

import { useRouter } from 'next/navigation'
import { format } from "date-fns"
import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { useOtherUser } from '@/app/hooks/useOtherUser'
import { FullConversationType } from '@/app/types/messagesTypes'
import { Avatar } from '@/components/Avatar'
import { AvatarGroup } from '@/components/AvatarGroup'

interface ConversationBoxProps {
    data: FullConversationType,
    selected?: boolean
}

export const ConversationBox: FC<ConversationBoxProps> = ({ data, selected }) => {
    const otherUser = useOtherUser(data);
    const session = useSession();
    const router = useRouter();

    const handleClick = useCallback(() => {
        router.push(`/conversations/${data.id}`, { scroll: false })
    }, [data.id, router])

    const lastMessage = useMemo(() => {
        const messages = data.messages || [];

        return messages[messages.length - 1]
    }, [data.messages])

    const userEmail = useMemo(() => {

        return session.data?.user?.email;
    }, [session.data?.user?.email])

    const hasSeen = useMemo(() => {
        if (!lastMessage) {
            return false
        }

        const seenArray = lastMessage.seen || []

        if (!userEmail) {
            return false
        }

        return seenArray
            .filter((user) => user.email === userEmail).length !== 0;
    }, [userEmail, lastMessage]);

    const lastMessageText = useMemo(() => {
        if (lastMessage?.image) {
            return "Sent an image"
        }

        if (lastMessage?.body) {
            return lastMessage.body
        }

        return "Started a conversation";
    }, [lastMessage])

    return (
        <div
            onClick={handleClick}
            className={clsx(`
            w-full relative flex items-center space-x-3 bg-white-primary p-3
            hover:bg-blue-dark rounded-lg cursor-pointer text-blue-dark group transition
            `,
                selected ? 'bg-neutral-100' : 'bg-white'
            )}
        >
            {
                data.isGroup ? (
                    <AvatarGroup users={data.users}/>
                ) : (
                    <Avatar user={otherUser} />
                )
            }
            <div className='min-w-0 flex-1'>
                <div className='focus:outline-none'>
                    <div className='flex justify-between items-center mb-1'>
                        <p className='text-md font-medium text-blue-dark group-hover:text-white transition'>
                            { data.name || otherUser.name }
                        </p>
                        {
                            lastMessage?.createdAt && (
                                <p className='text-xs text-purple-light font-light group-hover:text-blue-light transition'>
                                    {
                                        format(new Date(lastMessage.createdAt), 'p')
                                    }
                                </p>
                            )
                        }
                    </div>
                    <p className={clsx(`
                        truncate
                        text-sm
                        group-hover:text-blue-light transition
                        `,
                        hasSeen ? 'text-gray-500' : 'text-purple-middle  font-medium'
                    )}>
                        {lastMessageText}
                    </p>
                </div>
            </div>
        </div>
    )
}
