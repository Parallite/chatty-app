import { Button } from '@/app/components/Button';
import { Input } from '@/app/components/Inputs';
import { Modal } from '@/app/components/Modal';
import { SelectChat } from '@/app/components/SelectChat';
import { GroupChatFields, GroupChatSelectValue } from '@/app/types/formTypes';
import { groupChatFormSchema } from '@/app/types/validationShema';
import { yupResolver } from '@hookform/resolvers/yup';
import { User } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface GroupChatModalProps {
    isOpen: boolean;
    onClose: () => void;
    users: User[];
}

// Скорректировать типизацию
interface OptionType {
    value: string;
    label: string | null;
};

export const GroupChatModal: FC<GroupChatModalProps> = ({
    isOpen,
    onClose,
    users
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // добавить валидацию
    const groupChatFormOptions = {
        // resolver: yupResolver(groupChatFormSchema),
        defaultValues: {
            name: '',
            members: []
        }
    };
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors
        }
    } = useForm<GroupChatFields>({
        defaultValues: {
            name: '',
            members: []
        }
    })

    const members = watch('members')

    const onSubmit: SubmitHandler<GroupChatFields> = (data) => {
        setIsLoading(true);

        axios.post('/api/conversations', {
            ...data,
            isGroup: true
        })
            .then(() => {
                router.refresh();
                onClose()
            })
            .catch(() => toast.error('Something went wrong!'))
            .finally(() => setIsLoading(false))
    }

    const handleChange = (value: any) => {
        setValue('members', value, { shouldValidate: true })
    }

    const selectOptions: OptionType[] = users.map((user) => ({
        value: user.id,
        label: user.name
    }))

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-12'>
                    <div className='border-b border-white pb-10'>
                        <h2 className='text-base font-semibold leading-7 text-white'>
                            Create a group chat!
                        </h2>
                        <p className='mt-1 text-sm leading-6 text-green-light'>
                            Create a chat with mote than 2 people.
                        </p>
                        <div className='mt-10 flex flex-col gap-y-8'>
                            <Input
                                disabled={isLoading}
                                label="Name"
                                type="text"
                                icon="name"
                                id="name"
                                errors={errors}
                                required
                                register={register}
                                secondary
                            />
                            <SelectChat
                                disabled={isLoading}
                                label="Members"
                                options={selectOptions}
                                onChange={handleChange}
                                value={members}
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-6 flex items-center justify-end gap-x-6'>
                    <Button
                        disabled={isLoading}
                        onClick={onClose}
                        type='button'
                        danger
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={isLoading}
                        onClick={onClose}
                        type='submit'
                        secondary
                    >
                        Create
                    </Button>
                </div>
            </form>
        </Modal>
    )
}
