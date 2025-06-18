export default function Profile() {
  return (
    <>
      <div className='flex flex-col items-center justify-center border-2 p-5 m-5'>
        <h1 className='text-2xl font-semibold mb-2'>
          Hello World, I'm Stephan
        </h1>
        <p className='mb-6 text-center max-w-lg'>
          Full-stack software developer who lives in the terminal. I enjoy
          developing in Go and JavaScript.
        </p>

        <h2 className='text-xl font-semibold mb-2'>
          Navigating the UI & Terminal
        </h2>
        <p className='text-center max-w-lg'>
          <span className='inline-flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-4 h-4 text-green-500'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10 19l-7-7 7-7'
              />
            </svg>
            Use the navigation UI on the left
          </span>
          <br />
          <span className='inline-flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-4 h-4 text-green-500'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 10l-7 7-7-7'
              />
            </svg>
            Or use the terminal below with{' '}
            <code className='bg-gray-800 text-green-400 px-1 rounded'>
              /help
            </code>
          </span>
        </p>
        <h2 className='text-sm mt-5 font-semibold mb-2'>
          <i>Still working on the UI... If there are any issues let me know!</i>
        </h2>
      </div>
    </>
  )
}
