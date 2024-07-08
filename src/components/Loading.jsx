import React from 'react'

const Loading = () => {
    return <>
        <div className='h-screen bg-gray-800 flex justify-center items-center absolute top-0 text-gray-50 w-full'>
            <span className='me-4'>Please wait while Loading</span>
            <span className="loading loading-spinner loading-md"></span>
        </div>
    </>
}

export default Loading