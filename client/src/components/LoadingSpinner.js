import React from 'react'

function LoadingSpinner() {
  return (
    <div className='flex justify-center items-center'>
      <div class="text-lime-500 inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status" viewBox="0 0 24 24">
      </div>
      <div className='pl-2'>
        <p>
          Loading...
        </p>
      </div>
    </div>
  )
}

export default LoadingSpinner