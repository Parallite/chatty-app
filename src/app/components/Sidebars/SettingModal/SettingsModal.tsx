import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { FC, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { format } from "date-fns";

import { settingsFormSchema } from "@/app/types/validationShema";
import { SettingsFormFields } from "@/app/types/formTypes";

import { Modal } from "@/components/Modal";
import { Input } from "@/components/Inputs";
import { Button } from "@/components/Button";

interface SettingsModalProps {
    isOpen?: boolean;
    onClose: () => void;
    currentUser: User;
}

export const SettingsModal: FC<SettingsModalProps> = ({
    isOpen,
    onClose,
    currentUser
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const joinedDate = useMemo(() => {
        return format(new Date(currentUser.createdAt), 'PP')
    }, [currentUser.createdAt]);

    const settingsFormOptions = {
        resolver: yupResolver(settingsFormSchema),
        defaultValues: {
            name: currentUser?.name || '',
            image: currentUser?.image || ''
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
    } = useForm<SettingsFormFields>(settingsFormOptions);

    const image = watch('image');

    const handleUpload = (result: any) => {
        setValue('image', result?.info?.secure_url, {
            shouldValidate: true
        });
    }

    const handleCancelModal = () => {
        setValue('name', currentUser?.name || '')
        onClose()
    }


    const onSubmit: SubmitHandler<SettingsFormFields> = (data) => {
        setIsLoading(true);
        axios.post('/api/settings', data)
            .then(() => {
                router.refresh();
                onClose();
            })
            .catch(() => toast.error('Something went wrong!'))
            .finally(() => setIsLoading(false))
    }

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12 py-6">
                    <div className="border-b border-purple-dark">
                        <h2 className="text-base font-semibold leading-7 text-white">
                            Profile
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-green-light">
                            Edit your public information.
                        </p>
                        <div className="mt-10 flex flex-col gap-y-8">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-green-light">
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <Image
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                        src={image || currentUser?.image || '/images/placeholder.jpg'}
                                        alt="avatar"
                                    />
                                    <CldUploadButton
                                        options={{ maxFiles: 1 }}
                                        onUpload={handleUpload}
                                        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
                                    >
                                        <span className="flex min-w-[100px] justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2
                                            focus-visible:outline-offset-2 text-white relative overflow-hidden bg-purple-middle hover:bg-orange-middle">
                                            Change
                                        </span>
                                    </CldUploadButton>
                                </div>
                            </div>
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
                        </div>
                    </div>
                    <div className="py-5 sm:px-0 sm:pt-0">
                        <dl className="space-y-8 sm:space-y-6">
                            <div>
                                <dt className="text-sm font-medium text-green-middle sm:flex-shrink-0">
                                    Email
                                </dt>
                                <dd className="mt-1 text-sm text-white sm:col-span-2">
                                    {currentUser.email}
                                </dd>
                            </div>
                            <hr />
                            <div>
                                <dt className="text-sm font-medium text-green-middle sm:w-40 sm:flex-shrink-0">
                                    Joined
                                </dt>
                                <dd className="mt-1 text-sm text-white sm:col-span-2">
                                    <time dateTime={joinedDate}>
                                        {joinedDate}
                                    </time>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Button
                            disabled={isLoading}
                            danger
                            type="button"
                            onClick={handleCancelModal}
                        >
                            Cancel
                        </Button>
                        <Button
                            disabled={isLoading}
                            secondary
                            type="submit"
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}
