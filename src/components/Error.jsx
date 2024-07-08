import React from 'react'

const Error = (error, resetErrorBoundary) => {
    return <>
        <p className='text-red-500 underline'>{error && error.message} </p>
        <button className='btn btn-error' onClick={resetErrorBoundary}>Retry</button>
    </>
}

export default Error