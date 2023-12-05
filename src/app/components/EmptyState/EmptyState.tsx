import React from 'react'

export const EmptyState = () => {
  return (
    <div className='px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-white-primary rounded-3xl rounded-l-none'>
        <div className='text-center items-center flex flex-col'>
            <h3 className='mt-2 text-2xl font-semibold text-blue-dark'>
                Select a chat or start a new conversation
            </h3>
        </div>
    </div>
  )
}
