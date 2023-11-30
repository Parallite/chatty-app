import { FC } from 'react'
import { IconType } from 'react-icons'

interface AuthSocialButtonsProps {
    icon: IconType,
    onClick: () => void
}

export const AuthSocialButtons: FC<AuthSocialButtonsProps> = ({
    icon: Icon,
    onClick
}) => {
  return (
    <button
    type='button'
    onClick={onClick}
    className='inline-flex w-full justify-center rounded-md bg-white-primary px-4 py-2 text-blue-dark shadow-sm
    ring-1 ring-inset ring-blue-middle hover:ring-blue-dark hover:bg-blue-dark hover:border-blue-dark hover:shadow-blue-dark hover:shadow-lg hover:text-white-primary focus:outline-offset-0'
    >
        <Icon />
    </button>
  )
}
